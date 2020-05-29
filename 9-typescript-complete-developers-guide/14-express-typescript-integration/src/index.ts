import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['qwerty'] }));
app.use(router);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
