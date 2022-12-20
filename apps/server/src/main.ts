import * as express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
//import { Hallo } from 'tictactoe-typings';
import * as cors from 'cors';
import { insertUserXName, insertUserOName } from './db';
import * as cookieSession from 'cookie-session';
// import { SessionData, } from 'express-session';
const app = express();
dotenv.config();
const { WEBSITE, SECRET } = process.env;
declare module 'express-session' {
    interface SessionData {
        gameid: number;
    }
}
// +++++++ middleware +++++++

app.use(cors({ origin: '*' }));
//COOKIES
app.use(express.urlencoded({ extended: false }));
// import session from 'express-session';
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

// +++ set userstuff for X +++
app.post('/api/userx', (req, res) => {
  console.log('req.body', req.body);
   console.log("req.session", req.session)
  const { username } = req.body;
  const { avatar } = req.body;
  insertUserXName(username, avatar)
    .then((game) => {
      console.log('game', game);
      req.session.gameid = game.id;
      //console.log("X req.session", req.session)
      res.json({ success: true });
    })
    .catch((err) => {
      // uh oh
      console.log(err);
    });
});

// +++ set userstuff for O ) +++
app.post('/api/usero', (req, res) => {
  console.log('req.body', req.body);
   console.log("req.session", req.session)
  const { username } = req.body;
  const { avatar } = req.body;
  const { user_x } = req.body;
  //hardcoded cookie
  insertUserOName(username, avatar, user_x)
    .then((game) => {
      // console.log('game', game);
      console.log("req.session", req.session)
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
