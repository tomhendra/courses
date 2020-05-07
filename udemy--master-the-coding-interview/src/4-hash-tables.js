document.getElementById('section').append('Data Structures: Hash Tables.');

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhhhh!');
  },
};

user.age; // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)

// ES6...
// Map --> Gives you some order
// Set --> No duplicate keys
