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

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
  let t1 = performance.now();
  console.log(`Call to findNemo took ${t1 - t0} milliseconds.`);
}

findNemo(large);
