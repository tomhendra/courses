const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'dala',
  'hank',
];

const large = new Array(10000).fill('nemo');

// O(n) --> Linear time
// O(1) --> as the number of inputs increase...
// O(100) --> the number of operations increase...
// O(100000) --> at the same / linear rate.

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo(large);
