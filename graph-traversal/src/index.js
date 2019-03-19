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
// challenge pseudocode -- DFS recursive
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