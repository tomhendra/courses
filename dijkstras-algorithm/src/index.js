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
}

const graph = new WeightedGraph
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B", 9)
graph.addEdge("A","C", 5)
graph.addEdge("B","C", 7)
console.log(graph)