const person = {
  name: 'Tom',
  age: 36,
  location: {
    city: 'Salamanca',
    temp: 26
  }
}

// const name = person.name;
// const age = person.age;
const { name, age } = person; // creates 2 variables, same as below
console.log(`${name} is ${age} years old`);

// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} degrees in ${person.location.city}`);
// }

// object destructuring ....
const { city, temp } = person.location
if (city && temp) {
  console.log(`It's ${temp} degrees in ${city}`);
}

// renaming syntax to create local variable of different name for object property
const { city: userCity, temp: temperature } = person.location
if (userCity && temperature) {
  console.log(`It's ${temperature} degrees in ${userCity}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'self-published'} = book.publisher

console.log(publisherName);
