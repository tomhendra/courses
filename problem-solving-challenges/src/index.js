// ----------------------------------------------------------------------------------------------------------
// coding exercise 3 --- write a function called sameFrequency. Given 2 positive integers, find out if the numbers
// have the same frequency of digits.
// ----------------------------------------------------------------------------------------------------------
// frequency counter solution
const sameFrequency = (num1, num2) => {
    const str1 = num1.toString()
    const str2 = num2.toString()

    if (str1.length !== str2.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < str1.length; i++) {
        let digit = str1[i]
        lookup[digit] ? lookup[digit] += 1 : lookup[digit] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        let digit = str2[i]
        if (!lookup[digit]) {
        return false
        } else {
        lookup[digit] -= 1
        }
    }
    return true
}
// test cases
console.log('Frequency counter coding exercise: sameFrequency')
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578,5879385)) // true
console.log(sameFrequency(22,222)) // false
// ----------------------------------------------------------------------------------------------------------
// coding exercise 4 --- write a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are duplicates amongst the arguments passed in. 
// ----------------------------------------------------------------------------------------------------------
// Multiple pointers solution
const areThereDuplicates = (...arr) => {
    arr.sort((a,b) => a > b)
    let start = 0;
    let next = 1;
    while (next < arr.length) {
      if(arr[start] === arr[next]) {
          return true
      }
      start++
      next++
    }
    return false
}
// one liner solution: return new Set(arguments).size !== arguments.length
// test cases
console.log('Frequency counter / multiple pointers coding exercise: areThereDuplicates')
console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

// ----------------------------------------------------------------------------------------------------------
// coding exercise 5 --- write a function called averagePair. Given a sorted array of integers nad a target average
// determine if there is a pair of values in the array where the average of the pair equals the target 
// average. There may be more than one pair that matches the average target.
// ----------------------------------------------------------------------------------------------------------
// multiple pointers solution
const averagePair = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let average = (arr[left] + arr[right]) / 2
        if (average === target) {
            return true
        } else if (average > target) {
            right--
        } else {
            left++
        }
    }
    return false
}
// test cases
console.log('Multiple pointers coding exercise: averagePair')
console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6],4.1)) // false
console.log(averagePair([],4)) // false
// ----------------------------------------------------------------------------------------------------------
// coding exercise 6 --- write a function called isSubsequence which takes in 2 strings and checks whether the
// characters from the first string form a subsequence of the characters in the second string.
// ----------------------------------------------------------------------------------------------------------
// multiple pointers solution
const isSubsequence = (str1, str2) => {
    let i = 0;
    let j = 0;
    if (!str1) return true
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++
      if (i === str1.length) return true
      j++
    }
    return false
}
// test cases
console.log('Multiple pointers coding exercise: isSubsequence')
console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false
// ----------------------------------------------------------------------------------------------------------
// coding exercise 7 --- write a function called maxSubarraySum which takes in an array of integers and a number,
// and finds the maximum sum of a subarray with the length of the number passed to the function.
// ----------------------------------------------------------------------------------------------------------
const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null
 
    let total = 0;
    for (let i = 0; i < num; i++) {
       total += arr[i]
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num]
       total = Math.max(total, currentTotal)
    }
    return total;
}
// test cases
console.log('Sliding window coding exercise: maxSubarraySum')
console.log(maxSubarraySum([100,200,300,400],2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)) // 39
console.log(maxSubarraySum([-3,4,0,-2,6,1],2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3],3)) // null

// ----------------------------------------------------------------------------------------------------------
// coding exercise 8 --- write a function called minSubarrayLen which takes in an array of integers and an integer,
// and returns the minimal length of a contiguous subarray of which the sum is greater or equal to the 
// passed to the function. If there isn't one, return 0.
// ----------------------------------------------------------------------------------------------------------
const minSubarrayLen = (arr, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < arr.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if (total < sum && end < arr.length) {
        total += arr[end]
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if (total >= sum) {
        minLen = Math.min(minLen, end-start)
              total -= arr[start]
              start++
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break
      }
    }
    return minLen === Infinity ? 0 : minLen
}
// test cases
console.log('Sliding window coding exercise: minSubarrayLen')
console.log(minSubarrayLen([2,3,12,4,3],7)) // 2, because [4,3] is the smallest subarray
console.log(minSubarrayLen([2,1,6,5,4],9)) // 2, because [5,4] is the smallest subarray
console.log(minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19],52)) // 1, because [62] is greater than 52
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubarrayLen([4,3,3,8,1,2,3],11)) // 2
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10],95)) // 0
// ----------------------------------------------------------------------------------------------------------
// coding exercise 9 --- write a function called findLongestSubstring which accepts a string and returns the 
// length of of the longest substring with all distinct characters.
// ----------------------------------------------------------------------------------------------------------
let longest = 0
let seen = {}
let start = 0

for (let i = 0; i < str.length; i++) {
  let char = str[i]
  if (seen[char]) {
    start = Math.max(start, seen[char])
  }
  // index - beginning of substring + 1 (to include current in count)
  longest = Math.max(longest, i - start + 1);
  // store the index of the next char so as to not double count
  seen[char] = i + 1;
}
return longest;
// test cases
console.log('Sliding window code exercise: findLongestSubstring')
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6