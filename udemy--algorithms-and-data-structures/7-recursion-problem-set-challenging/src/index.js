// ----------------------------------------------------------------------------------------------------------
// coding exercise 15 --- write a recursive function called reverse which accepts a string nd returns a new
// string in reverse.
// ----------------------------------------------------------------------------------------------------------
const reverse = (str) => {
    if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0]
}
// test cases
console.log('Coding exercise 15: reverse')
console.log(reverse('awesome')) // emosewa
console.log(reverse('rithmschool')) // loohcsmhtir

// ----------------------------------------------------------------------------------------------------------
// coding exercise 16 --- write a recursive function called isPalindrome which returns true if the string 
// passed to it is a palindrome.
// ----------------------------------------------------------------------------------------------------------
const isPalindrome = (str) => {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
// test cases
console.log('Coding exercise 16: isPalindrome')
console.log(isPalindrome('awesome')) // false 
console.log(isPalindrome('foobar')) // false 
console.log(isPalindrome('tacocat')) // true 
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

// ----------------------------------------------------------------------------------------------------------
// coding exercise 17 --- write a recursive function called someRecursive which accepts an array and a 
// callback. The function should return true if a single value in the array returns true when passed to the 
// callback. Otherwise it should return false.
// ----------------------------------------------------------------------------------------------------------
const someRecursive = (array, callback) => {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}
// test cases
const isOdd = (val) => val % 2 !== 0
console.log('Coding exercise 17: someRecursive')
console.log(someRecursive([1,2,3,4],isOdd)) // true
console.log(someRecursive([4,6,8,9],isOdd)) // true
console.log(someRecursive([4,6,8],isOdd)) // false
console.log(someRecursive([4,6,8],val => val > 10)) // false

// ----------------------------------------------------------------------------------------------------------
// coding exercise 18 --- write a recursive function called flatten which accepts an array of arrays and 
// returns a new array with all values flattened.
// ----------------------------------------------------------------------------------------------------------
const flatten = (arr) => {
    let newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    } 
    return newArr;
}
// test cases
console.log('Coding exercise 18: flatten')
console.log(flatten([1,2,3,[4,5]])) // [1,2,3,4,5]
console.log(flatten([[1,[2,[3,4],[5]]]])) // [1,2,3,4,5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1],[[[2]]],[[[[[[[3]]]]]]]]]])) // [1,2,3]

// ----------------------------------------------------------------------------------------------------------
// coding exercise 19 --- write a recursive function called capitalizeFirst. Given an array of strings, 
// capitalize the first letter of each string in the array.
// ----------------------------------------------------------------------------------------------------------
const capitalizeFirst = (arr) => {
    if (arr.length === 1) {
        return [arr[0][0].toUpperCase() + arr[0].substr(1)]
      }
      const res = capitalizeFirst(arr.slice(0, -1))
      const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1)
      res.push(string)
      return res
}
// test cases
console.log('Coding exercise 19: capitalizeFirst')
console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']

// ----------------------------------------------------------------------------------------------------------
// coding exercise 20 --- write a recursive function called nestedEvenSum. Return the sum of all even 
// numbers in an object which may contain nested objects
// ----------------------------------------------------------------------------------------------------------
const nestedEvenSum = (obj, sum=0) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key])
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){ 
            sum += obj[key]
        }
    }
    return sum
}
// test cases
const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
console.log('Coding exercise 20: nestedEvenSum')
console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10

// ----------------------------------------------------------------------------------------------------------
// coding exercise 21 --- write a recursive function called capitalizeWords. Given an array of words, return
// a new array containing each word capitalized.
// ----------------------------------------------------------------------------------------------------------
const capitalizeWords = (arr) => {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
      }
      let res = capitalizeWords(arr.slice(0, -1));
      res.push(arr.slice(arr.length-1)[0].toUpperCase());
      return res;
}
// test cases
console.log('Coding exercise 21: capitalizeWords')
console.log(capitalizeWords(['i','am','learning','recursion'])) // ['I','AM','LEARNING','RECURSION']

// ----------------------------------------------------------------------------------------------------------
// coding exercise 22 --- write a recursive function called stringifyNumbers which takes in an object and
// finds l of the values which are numbers and converts them to strings. 
// ----------------------------------------------------------------------------------------------------------
const stringifyNumbers = (obj) => {
    const newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString()
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key])
        } else {
            newObj[key] = obj[key]
        }
  }
  return newObj;
}
// test cases
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log('Coding exercise 22: stringifyNumbers')
console.log(stringifyNumbers(obj))
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// ----------------------------------------------------------------------------------------------------------
// coding exercise 23 --- write a recursive function called collectStrings which accepts an object and 
// returns an array of all the values in he object that have a typeof string.
// ----------------------------------------------------------------------------------------------------------
const collectStrings = (obj) => {
    let stringsArr = [];
    for (let key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
    return stringsArr;
}
// test cases
const obj3 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log('Coding exercise 24: collectStrings')
console.log(collectStrings(obj3)) // ["foo", "bar", "baz"])