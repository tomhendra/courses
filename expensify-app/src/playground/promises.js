const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Tom',
      age: 36
    });
    reject('Something went wrong!');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1...', data);
}).then((data) => {
  console.log('2...', data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');
