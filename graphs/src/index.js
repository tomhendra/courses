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
