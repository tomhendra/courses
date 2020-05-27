document.getElementById('section').append('Algorithms: Searching');

// Built in searching methods all linear searches -- O(n) tome complexity
const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function (item) {
  return item === 'Godzilla';
});

beasts.find(function (item) {
  return item === 'Godzilla';
});

beasts.includes('Godzilla');

// Exercise -- interview questions

// If you know a solution is not far from the root of the tree:
// BFS

// If the tree is very deep and solutions are rare:
// BFS (DFS will take a long time)

// If the tree is very wide:
// DFS (BFS will need too much memory, storing all the nodes)

// If solutions are frequent but located deep in the tree:
// DFS

// Determining whether a path exists between two nodes:
// BFS

// Finding the shortest path:
// BFS
