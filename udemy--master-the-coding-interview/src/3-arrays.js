document.getElementById('section').append('Data Structures: Arrays.');

const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array
// and grab the 3rd item from where the array is stored.

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)
strings.pop();

// unshift
strings.unshift('x'); // O(n) -- because each item needs to be re-indexed

// splice
strings.splice(2, 0, 'alien'); // O(n / 2) -- O(n) worst case simplified

console.log(strings);

// Building our own array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
console.log(myArray);

// reverse a string
function reverse(str) {
  if (!str || typeof str != 'string' || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

function reverse2(str) {
  //check for valid input
  return str.split('').reverse().join('');
}

const reverse3 = (str) => [...str].reverse().join('');

console.log(reverse('moT si eman ym ,iH'));
console.log(reverse('moT si eman ym ,iH'));
console.log(reverse3('moT si eman ym ,iH'));

// merge sorted arrays
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that
  // we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

// better readability
function mergeSortedArrays2(arr1, arr2) {
  // check inputs
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
console.log(mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30]));
