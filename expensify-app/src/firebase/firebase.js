import * as firebase from 'firebase';

const config = {
  ?????????????????
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Tom Hendra',
  age: 36,
  stressLevel: 6,
  isSingle: false,
  occupation: {
    title: 'Student',
    company: 'FreeCodeCamp'
  },
  location: {
    city: 'Salamanca',
    country: 'Spain'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('This failed!', e);
});

// Update must be called with object
// Nested objects cannot be used with update unless using forward slash and quotes (using forward slash isn't valid JS)
database.ref().update({
  isSingle: null, // can remove with null
  stressLevel: 9,
  'occupation/title': 'Front-End Developer',
  'occupation/company': 'Google',
  'location/city': 'Zurich',
  'location/country': 'Switzerland'
});

// can use set to remove data entries by passing null
// database.ref('isSingle').set(null);

// remove from db
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data removed.')
//   }).catch((e) => {
//     console.log('Error: ', e)
//   });
