// =======
// GRAPHS
// =======
// - a graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph
// - put simply, a collection of nodes & connections
//
// - uses for graphs:
//     - social networks
//     - location / mapping
//     - routing algorithms
//     - visual hierarchy
//     - file system optimizations
//     - recommendation engines
//     - everywhere!
//
// - essential terminology:
//     - vertex -- a node
//     - edge -- connection between the nodes
//     - weighted / unweighted -- values assigned to distances between vertices
//         - weighted graphs have information about the connection itself
//         - unweighted graphs only have connections defined 
//     - directed / undirected -- directions assigned to distances between vertices
//         - directed graphs have a direction assigned to the edge (e.g. Instagram)
//         - undirected graph have two way connections (e.g. Facebook)
//
// - two common methods of implementing graphs:
//     - adjacency list
//     - adjacency matrix

// - differences and big O:
//     - |V| = number of vertices
//     - |E| = number of edges
//
// -----------------------------------------------------------
// operation       |  adjacency list    |  adjacency matrix  | 
// ===========================================================
// add vertex      |        O(1)        |      O(|V^2|)      |  
// -----------------------------------------------------------
// add edge        |        O(1)        |        O(1)        |
// -----------------------------------------------------------
// remove vertex   |    O(|V| + |E|)    |      O(|V^2|)      |   
// -----------------------------------------------------------
// remove edge     |       O(|E|)       |        O(1)        |
// -----------------------------------------------------------
// query           |    O(|V| + |E|)    |        O(1)        |
// -----------------------------------------------------------
// storage         |    O(|V| + |E|)    |      O(|V^2|)      |   
// -----------------------------------------------------------
//
// ------------------------------------------------------
//   adjacency list          |  adjacency matrix        |
// ======================================================
//   can take up less space  |  can take up less space  |
//   (in sparse graphs)      |  (in sparse graphs)      | 
// ------------------------------------------------------
//   faster to iterate over  |  slower to iterate over  |
//   all edges               |  all edges               |
// ------------------------------------------------------
//   can be slower to lookup |  faster to lookup        |
//   specific edge           |  specific edge           |
// ------------------------------------------------------

// - implementation: undirected graph using an adjacency list
class Graph {
    constructor() {
        this.adjacencyList = {}
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- adding a vertex
// - write a method called addVertex which accepts a name of a vertex
// - it should add a key to the adjacency list with the name of the vertex nd set its value as an empty array
// ----------------------------------------------------------------------------------------------------------
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- adding an edge
// - this function should accept two vertices, we can call them vertex1 and vertex2
// - the function should find in the adjacency list the key of vertex1 and push vertex2 to the array
// - the function should find in the adjacency list the key of vertex2 and push vertex1 to the array
// - don't worry about handling errors / invalid vertices
// ----------------------------------------------------------------------------------------------------------
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- removing an edge
// - this function should accept two vertices, we can call them vertex1 and vertex2
// - the function should reassign the key of vertex1 to be an array that does not contain vertex 2
// - the function should reassign the key of vertex2 to be an array that does not contain vertex 1
// - don't worry about handling errors / invalid vertices
// ----------------------------------------------------------------------------------------------------------
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- removing a vertex
// - this function should accept a vertex to remove
// - the function should loop as long as there are ny other vertices in the adjacency list for that vertex
// - inside of the loop call the removeEdge method with the vertex being removed nd any values in the 
//   adjacency list for that vertex
// - delete the key in the adjacency list for that vertex
// - don't worry about handling errors / invalid vertices
// ----------------------------------------------------------------------------------------------------------
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}
let graph = new Graph;
graph.addVertex("Salamanca");
graph.addVertex("Malaga");
graph.addVertex("Sevilla");
graph.addVertex("Cordoba");
graph.addVertex("Granada");
graph.addEdge("Salamanca", "Malaga");
graph.addEdge("Salamanca", "Sevilla");
graph.addEdge("Cordoba", "Sevilla");
graph.addEdge("Granada", "Salamanca");
graph.addEdge("Granada", "Malaga");
graph.removeVertex("Salamanca");
console.log(graph);