import * as firebase from 'firebase';

const config = {
  ?????????
};

firebase.initializeApp(config);

const database = firebase.database();

// listen / subscribe to changes, gets called with callback function, returns function...
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(37);
}, 3500);

// using off() to unsubscribe...
setTimeout(() => {
  database.ref().off('value', onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(39);
}, 10500);

// challenge...
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.occupation.title} at ${val.occupation.company}`);
// });

// using once to fetch data from db, which returns a promise...
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data: ' , e);
//   });

// Setting db entries....
// database.ref().set({
//   name: 'Tom Hendra',
//   age: 36,
//   stressLevel: 6,
//   isSingle: false,
//   occupation: {
//     title: 'Student',
//     company: 'FreeCodeCamp'
//   },
//   location: {
//     city: 'Salamanca',
//     country: 'Spain'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed!', e);
// });

// // Update must be called with object...
// // Nested objects cannot be used with update unless using forward slash and quotes (using forward slash isn't valid JS)...
// database.ref().update({
//   isSingle: null, // can remove with null
//   stressLevel: 9,
//   'occupation/title': 'Front-End Developer',
//   'occupation/company': 'Google',
//   'location/city': 'Zurich',
//   'location/country': 'Switzerland'
// }).then(() => {
//   console.log('Data has been updated');
// }).catch((e) => {
//   console.log('Update failed!', e);
// });

// remove entries from db...
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data removed.')
//   }).catch((e) => {
//     console.log('Error: ', e)
//   });
