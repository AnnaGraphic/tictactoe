import * as express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
//import { Hallo } from 'tictactoe-typings';
import * as cors from 'cors';
dotenv.config();

const { WEBSITE } = process.env;
console.log('website', WEBSITE);

const { insertUserXName } = require('./db.ts');

const app = express();
// const test: Hallo = {
//   gruss: 'hallo',
// };
// console.log(test);

// +++++++ middleware +++++++
app.use(cors({ origin: '*' }));

// json parser
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use((req, res, next) => {
  console.log('---------------------');
  console.log('req.url:', req.url);
  console.log('req.method:', req.method);
  // console.log('req.session:', req.session);
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
      res.json({ success: true });
    })
    .catch((err) => {
      // uh oh
      console.log(err);
    });
});

// +++++++ all routes +++++++
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'assets', '..', 'client', 'public'));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
