import { User } from './models/User';

const user = new User({ name: 'Hubert Cufflebum', age: 65 });

user.events.on('change', () => {
  console.log('Change!!');
});

user.events.trigger('change');
