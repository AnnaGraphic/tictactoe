import * as express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
//import { Hallo } from 'tictactoe-typings';
import * as cors from 'cors';
import { insertUserXName, insertUserOName } from './db';
import * as cookieSession from 'cookie-session';
dotenv.config();

const { WEBSITE, SECRET } = process.env;

// +++++++ middleware +++++++
const app = express();

//COOKIES

app.use(express.urlencoded({ extended: false }));
// causes session-object to be stringified, base64 encoded , and written to a cookie,
// then decode, parse and attach to req-obj
//Tampering is prevented because of a second cookie that is auto added.
app.use(
  cookieSession({
    secret: `${SECRET}`,
    maxAge: 1000 * 60 ** 24 * 14,
    name: 'ultimate-cookie',
  })
);

// const test: Hallo = {
//   gruss: 'hallo',
// };
// console.log(test);

app.use(cors({ origin: '*' }));

// json parser
app.use(express.json());

app.use((req, res, next) => {
  console.log('---------------------');
  console.log('req.url:', req.url);
  console.log('req.method:', req.method);
  console.log('req.session:', req.session);
  // console.log('req.session.userId:', req.session.userId);
  console.log('---------------------');
  next();
});

// +++++++ routes +++++++
// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to server!' });
// });

// +++ set username for X +++
app.post('/api/usernamex', (req, res) => {
  console.log('req.body', req.body);
  const { username } = req.body;
  const { avatar } = req.body;
  insertUserXName(username)
    .then((user) => {
      console.log('user', user);
      req.session.id = user.id;
      res.json({ success: true });
    })
    .catch((err) => {
      // uh oh
      console.log(err);
    });
});


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
