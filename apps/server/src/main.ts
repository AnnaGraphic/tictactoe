import * as express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import { insertUserO, insertUserXName,  getGame, getGames, setWin } from './db';
const app = express();
dotenv.config();
const { WEBSITE, SECRET, PORT } = process.env;
// declare module 'express-session' {
//     interface SessionData {
//         gameid: number;
//     }
// }


// +++++++ middleware +++++++

app.use(cors({ origin: '*' }));
//COOKIES
app.use(express.urlencoded({ extended: false }));
// import session from 'express-session';
// causes session-object to be stringified, base64 encoded , and written to a cookie,
// then decode, parse and attach to req-obj
//Tampering is prevented because of a second cookie that is auto added.
// app.use(
//   cookieSession({
//     secret: `${SECRET}`,
//     maxAge: 1000 * 60 ** 24 * 14,
//     name: 'ultimate-cookie',
//   })
// );
// json parser
app.use(express.json());

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


// +++ set userstuff for X +++
app.post('/api/userx', (req, res) => {
  console.log('req.body', req.body);
   console.log("req.session", req.session)
  const { username } = req.body;
  const { avatar } = req.body;
  insertUserXName(username, avatar)
    .then((game) => {
      console.log('game', game);
      //req.session.gameid = game.id;
      //console.log("X req.session", req.session)
      res.json({ success: true , id: game.id});
    })
    .catch((err) => {
      // uh oh
      console.log(err);
    });
});

// +++ write user o into table+++
app.post('/api/usero', (req, res) => {
  console.log('req.body', req.body);
   //console.log("req.session", req.session)
  const { game_id, username, avatar } = req.body;

  insertUserO( username, avatar, game_id,)
    .then((game) => {
      console.log('game in user o', game);
      // console.log("req.session", req.session);
      res.json({ success: true });
    })
    .catch((err) => {
      // uh oh
      console.log(err);
    });
});

// // +++ get games ) +++
app.get('/api/getgames', (req, res) => {
  console.log("getgames", req.body);
getGames().then((games) => {
  console.log("games ", games);
res.json((games))
}).catch((err) => {
      // uh oh
      console.log(err);
    });
})

// // +++ get current game ) +++
app.get('/api/getgame/:id', (req, res) => {
  console.log("getgame ", req.params.id);
getGame(req.params.id).then((game) => {
  console.log("game ", game);
res.json((game))
}).catch((err) => {
      // uh oh
      console.log(err);
    });
})

// +++ set win ) +++
app.post('/api/win', (req, res) => {
   console.log('req.body set win', req.body);
   const {win, game_id} = req.body;
   setWin(win, game_id).catch((err) => {
      // uh oh
      console.log(err);
    });
})

//const port = process.env.port || 3333;
const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api`);
});
server.on('error', console.error);
