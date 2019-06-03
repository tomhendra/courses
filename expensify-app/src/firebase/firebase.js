import * as firebase from 'firebase';

const config = {
  // ENVIRONMENT_VARIABLES_HERE

};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
