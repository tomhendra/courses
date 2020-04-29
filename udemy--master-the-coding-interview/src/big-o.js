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

// O(1) --> Constant time
// no matter how many boxes there are, the output is the same.
function compressBoxes(boxes) {
  console.log(boxes[0]);
}

// O(2) in total --> still constant time.
function findFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}
