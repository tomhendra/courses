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
// - 2. once we’ve moved to the node we’re going to visit, we look at each of its neighbors
// - 3. for each neighboring node, we calculate the distance by summing the total edges that lead to the node we’re checking from 
//      the starting node
// - 4. if the new total distance to a node is less than the previous total, we store the new shorter distance for that node

// min binary heap setup:
class PriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() { // notice we are sorting which is O(N * log(N))
      this.values.sort((a, b) => a.priority - b.priority);
    };
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
}

const graph = new WeightedGraph()
const queue = new PriorityQueue()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B", 9)
graph.addEdge("A","C", 5)
graph.addEdge("B","C", 7)
console.log(graph)