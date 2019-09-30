// =====================
// DIJKSTRA'S ALGORITHM
// =====================
// - one of the most famous and widely used algorithms around
// - finds the shortest path between two vertices on a graph
// - what's the fastest way to get from point A to point B?
//
// - why it is useful:
//     - GPS - finding the shortest route
//     - network routing - finds open shortest path for data
//     - biology - used to model the spread of viruses among humans
//     - airline tickets - finds the cheapest route to your destination
//     - many other uses!

// - the approach can be broken down into four main steps:
// - 1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
// - 2. once we’ve moved to the node we’re going to visit, we look at each of its neighbours
// - 3. for each neighbouring node, we calculate the distance by summing the total edges that lead to the node we’re checking from 
//      the starting node
// - 4. if the new total distance to a node is less than the previous total, we store the new shorter distance for that node

// ----------------------------------------------------------------------------------------------------------
// optimization by using the priority queue from binary heaps section previously covered, which is much 
// faster than a naive version using an array
// ----------------------------------------------------------------------------------------------------------
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length -1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parentElement = this.values[parentIndex];
            if (element.priority >= parentElement.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parentElement;
            index = parentIndex;
        }
    }
    dequeue() { 
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }
    bubbleDown() { 
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- dijkstra's shortest path algorithm
// - this function should accept a starting and ending vertex
// - create an object (we'll call it distances) and set each key to be every vertex in the adjacency list 
//   with a value of infinity, except the starting vertex which should have a value of 0.
// - after setting a value in the distances object, add each vertex with a priority of Infinity to the 
//   priority queue, except the starting vertex, which should have a priority of 0 because that's where we 
//   begin.
// - create another object called previous and set each key to be every vertex in the adjacency list with a 
//   value of null
// - start looping as long as there is anything in the priority queue
//     - dequeue a vertex from the priority queue
//     - if that vertex is the same as the ending vertex - we are done!
//     - otherwise loop through each value in the adjacency list at that vertex
//         - calculate the distance to that vertex from the starting vertex
//         - if the distance is less than what is currently stored in our distances object
//         - update the distances object with new lower distance
//         - update the previous object to contain that vertex
//         - enqueue the vertex with the total distance from the start node
// ----------------------------------------------------------------------------------------------------------
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length){
            smallest = nodes.dequeue().value;
            if (smallest === finish) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if (smallest || distances[smallest] !== Infinity) {
                for(let neighbour in this.adjacencyList[smallest]) {
                    //find neighbouring node
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    //calculate new distance to neighbouring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node;
                    if (candidate < distances[nextNeighbour]) {
                        //updating new smallest distance to neighbour
                        distances[nextNeighbour] = candidate;
                        //updating previous - How we got to neighbour
                        previous[nextNeighbour] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

const graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A","B", 4)
graph.addEdge("A","C", 2)
graph.addEdge("B","E", 3)
graph.addEdge("C","D", 2)
graph.addEdge("C","F", 4)
graph.addEdge("D","E", 3)
graph.addEdge("D","F", 1)
graph.addEdge("E","F", 1)
console.log(graph.Dijkstra("A", "E"))