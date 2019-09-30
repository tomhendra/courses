// Object destructuring
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


// Array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, myCity, state] = address;
console.log(`You are in ${myCity}, ${state}`);

const item = ['tea', '€2.00', '€2.50', '€2.75'];
const [itemName, small, medium, large] = item;
console.log(`A medium ${itemName} costs ${medium}`);
