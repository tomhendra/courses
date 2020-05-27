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
