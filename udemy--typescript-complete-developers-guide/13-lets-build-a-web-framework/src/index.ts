import { User } from './models/User';

const user = new User({ id: 1, name: 'Harold Pumbiffer', age: 155 });

user.on('save', () => {
  console.log(user);
});

user.save();
