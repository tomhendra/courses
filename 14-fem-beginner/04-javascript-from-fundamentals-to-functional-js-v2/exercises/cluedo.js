/* Create an object using bracket and dot notation that represents
 * the characters and related data you may find in a game of Cluedo.
 */

var game = {};

game.murderer = '??';

game['weapons'] = [
  { type: 'lasers', location: 'library' },
  { type: 'angry cats', location: 'drawing room' },
  { type: 'killer crabs', location: 'billiards room' },
];

game.characters = [];
game.characters['Miss Scarlet'];
game.characters.push('Mr Green');
