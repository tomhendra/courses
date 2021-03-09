// Remove duplicates from a string
function removeDuplicates(str) {
  const arr = str.split(' ');

  const set = new Set(arr);
  const newStr = [...set].join(' ');

  return newStr;
}

// Without using .flat(), create a function to flatten an array
function flatten(arr) {
  arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
