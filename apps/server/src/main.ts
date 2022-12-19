import * as express from 'express';
import * as path from 'path';
//import { Hallo } from 'tictactoe-typings';
import * as cors from 'cors';

const { WEBSITE } = process.env;

const { insertUserXName } = require('./db');

const app = express();
// const test: Hallo = {
//   gruss: 'hallo',
// };
// console.log(test);

// +++++++ middleware +++++++
app.use(cors({ origin: WEBSITE }));

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
app.post('/api/username-x', (req, res) => {
  console.log('req.body', req.body);
  const { username } = req.body;
  insertUserXName(username)
    .then((user) => {
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
