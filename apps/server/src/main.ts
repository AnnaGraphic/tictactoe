/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import { Hallo } from 'tictactoe-typings';
import * as cors from 'cors';
const { WEBSITE } = process.env;

const app = express();

const test: Hallo = {
  gruss: 'hallo',
};
console.log(test);

// +++++++ middleware +++++++
app.use(cors({ origin: WEBSITE }));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// +++++++ route +++++++
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
