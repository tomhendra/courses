// ================
// GRAPH TRAVERSAL
// ================
// - visiting, updating, checking each vertex in a graph
// - many real world applications, and a very common interview question
// - unlike a tree, a graph has no starting point, so it needs to be specified
//
// - graph traversal uses:
//     - peer to peer networking
//     - web crawlers
//     - finding "closest"
//     - matches / recommendations
//     - shortest path problems
//         - GPS navigation 
//         - solving mazes
//         - AI (shortest path to win a game)
//
// BFS - explore as far as possible down one branch before "backtracking"
// DFS - visit neighbors at current depth first!

// ----------------------------------------------------------------------------------------------------------
// the following code is copied from the graphs section, to provide a graph data structure to work with
// ----------------------------------------------------------------------------------------------------------
class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- DFS recursive (simple)
// - if vertex is empty
//     - return (this is base case)
// - add vertex to results list
// - mark vertex as visited
// - for each neighbour in vertex's neighbour:
//     - if neighbour is not visited
//         - recursively call DFS on neighbour
//
// challenge pseudocode -- DFS recursive (detailed)
// - the function should accept a starting node
// - create a list to store the result that will return at the very end
// - create an object to store the visited vertices
// - create a helper function that accepts vertex
//     - the helper function should return early if the vertex is empty
//     - the helper function should place the vertex it accepts into the visited object and push that vertex
//       into the result array
//     - loop over all of the values in the adjacencyList for that vertex 
//     - if any of those values have not been visited, recursively invoke the helper function with that vertex
// - invoke the helper function with the starting vertex
// - return the result array
// ----------------------------------------------------------------------------------------------------------
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs (vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    return dfs(neighbour);
                }
            }) 
        }) (start);
        return result;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- DFS iterative (simple)
// - DFS-iterative(start):
//     - let S be a stack
//     - S.push(start)
//     - while S is not empty
//         - vertex = S.pop()
//         - if vertex is not labeled as discovered:
//             - visit vertex (add to result list)
//             - label vertex as discovered
//             - for each of vertex's neighbours, N do 
//                 - S.push(N)
//
// challenge pseudocode -- DFS iterative (detailed)
// - the function should accept a starting node
// - create a stack to help use keep track of vertices (use a list/array)
// - create a list to store the end result, to be returned at the very end
// - create an object to store visited vertices
// - add the starting vertex to the stack, and mark it visited
// - while the stack has something in it:
//     - pop the next vertex from the stack
//     - add it to the result list
//     - if that vertex hasn't been visited yet:
//         - ​mark it as visited
//         - push all of its neighbors into the stack
// - return the result array
// ----------------------------------------------------------------------------------------------------------
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            })
        }
        return result;
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- BFS
// - the function should accept a starting vertex
// - create a queue (can use array) and place the starting vertex in it
// - create an array to store the nodes visited
// - create an object to store nodes visited
// - mark the starting vertex as visited
// - loop as long as there is anything in the queue
// - remove the first vertex from the queue and push it into the array that stores nodes visited
// - loop over each vertex in the adjacency list for the vertex you are visiting.
// - if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
// - once you have finished looping, return the array of visited nodes
// ----------------------------------------------------------------------------------------------------------
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour)
                }
            })
        }
        return result;
    }
}
const g = new Graph
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g)
console.log(g.depthFirstRecursive("A"))
console.log(g.depthFirstIterative("A"))
console.log(g.breadthFirst("A"))