import * as firebase from 'firebase';

const config = {
  // ENVIRONMENT_VARIABLES_HERE
};

firebase.initializeApp(config);

const database = firebase.database();

// Subscribe to child removed...
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log('Child removed...', snapshot.key, snapshot.val())
});

// Subscribe to child added...
database.ref('expenses').on('child_added', (snapshot) => {
  console.log('Child added...', snapshot.key, snapshot.val())
});

// Subscribe to child changed...
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log('Child changed...', snapshot.key, snapshot.val())
});

// Subscribe to changes and generate array...
database.ref('expenses').on('value', (snapshot) => {
  // build array from database objects using built in forEach method for snapshot...
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses)
}, (e) => {
  console.log('Error data fetching', e);
});


// start afresh...
database.ref().remove();

// Setup "expenses" with three items (description, note, amount, createdAt)...
database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
});

database.ref('expenses').push({
  description: 'Phone bill',
  note: '',
  amount: 5900,
  createdAt: 976123498763
});

database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 1200,
  createdAt: 976123498763
});

// Firebase doesn't support arrays, so new objects need to be added using push()...
database.ref('notes').push({
  title: 'Course topics',
  body: 'React, Angular, GraphQL'
});

// remove by ID
database.ref('notes/-LgT6zlOiWbR1p4JUZtI').remove();

// listen / subscribe to changes, gets called with callback function, returns function...
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(37);
}, 3500);

// // using off() to unsubscribe...
setTimeout(() => {
  database.ref().off('value', onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(39);
}, 10500);

// challenge...
database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.occupation.title} at ${val.occupation.company}`);
});


// using once to fetch data from db, which returns a promise...
database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  }).catch((e) => {
    console.log('Error fetching data: ' , e);
  });


// // Update must be called with object...
// // Nested objects cannot be used with update unless using forward slash and quotes (using forward slash isn't valid JS)...
database.ref().update({
  isSingle: null, // can remove with null
  stressLevel: 9,
  'occupation/title': 'Front-End Developer',
  'occupation/company': 'Google',
  'location/city': 'Zurich',
  'location/country': 'Switzerland'
}).then(() => {
  console.log('Data has been updated');
}).catch((e) => {
  console.log('Update failed!', e);
});


// remove entries from db...
database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('Data removed.')
  }).catch((e) => {
    console.log('Error: ', e)
  });
