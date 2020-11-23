document.getElementById("section").append("Big O.");

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "dala",
  "hank",
];

const large = new Array(10000).fill("nemo");

// O(n) --> Linear time
// O(1) --> as the number of inputs increase...
// O(100) --> the number of operations increase...
// O(100000) --> at the same / linear rate.
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      break; // break out of loop once Nemo is found, but doesn't affect big O (worst case)
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

// O(n + x)
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (box) {
    console.log(box);
  });

  boxes2.forEach(function (box) {
    console.log(box);
  });
}

// Log all pairs of array: O(n^2) --> quadratic time
const boxes = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);

// this would be O(n + n^2) but we drop the non-dominant terms, so it becomes O
function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:"); // O(n)
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("and these are their sums:"); // O(n^2)
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// #1 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}

boooo(23);

// #2 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  console.log(hiArray);
  return hiArray;
}

arrayOfHiNTimes(6);
