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
console.log('Coding exercise 17: someRecursive')
const isOdd = (val) => val % 2 !== 0
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