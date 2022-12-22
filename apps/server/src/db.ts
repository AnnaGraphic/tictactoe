import * as dotenv from 'dotenv';
const database = 'ultimatetictactoe';
const spicedPg = require('spiced-pg');
const db = spicedPg(process.env.DATABASE_URL);

export function setGame(user_x, user_x_avatar, user_o, user_o_avatar) {
  return db
    .query(
      `INSERT INTO games (user_x, user_x_avatar, user_o, user_o_avatar) VALUES($1, $2, $3, $4)
        RETURNING*`,
      [user_x, user_x_avatar, user_o, user_o_avatar]
    )
    .then((response) => {
      console.log(
        'result set game',
        response,
        'result.rows[0]',
        response.rows[0]
      );
      return response.rows[0];
    })
    .catch((err) => console.log(err));
}

export function insertUserXName(name_x, avatar) {
  return db
    .query(
      `INSERT INTO games (user_x, user_x_avatar) VALUES($1, $2)
        RETURNING*`,
      [name_x, avatar]
    )
    .then((response) => {
      // console.log(
      //   'result insert user x',
      //   response,
      //   'result.rows[0]',
      //   response.rows[0]
      // );
      return response.rows[0];
    })
    .catch((err) => console.log(err));
}

export function insertUserO(user_o, user_o_avatar, id) {
  //console.log("user_o, user_o_avatar, id", user_o, user_o_avatar, id)
  return db
  
    .query(
      // `UPDATE games 
      // SET user_o=$1, user_o_avatar=$2 WHERE id=$3
      // RETURNING*`,
` INSERT INTO games(user_o, user_o_avatar, id) 
    VALUES ($1, $2, $3) 
    ON CONFLICT (id) 
    DO UPDATE SET user_o=$1, user_o_avatar=$2
    RETURNING *`,
      [user_o, user_o_avatar, id]
    )
    .then((result) => {
      // console.log(
      //   'result insert user o',
      //   result,
      //   'result.rows[0]',
      //   result.rows[0]
      // );
      return result.rows[0];
    })
    .catch((err) => console.log("error in user O db", err));
}
export function setWin(win, id) {
  return db.query(
   `UPDATE games 
      SET win=$1 WHERE id=$2
      RETURNING*`,
      [win, id]) .then((result) => {
        console.log("result set win", result.rows[0])
      return result.rows[0];
    })
    .catch((err) => console.log("error in user O db", err));

}

export function getGames() {
  return db.
  query(`SELECT * FROM games WHERE win <> ''
  ORDER BY id DESC`
  ).then((result) => {
    //console.log('result.rows in getGames ', result.rows)
      return result.rows;
    })
    .catch((err) => console.log("error in in getGames", err));
}

export function getGame(id) {
 // console.log("id", id)
  return db.
  query(`SELECT * FROM games WHERE id=$1`,
  [id]
  ).then((result) => {
    console.log('result.rows in getGame ', result.rows)
      return result.rows[0];
    })
    .catch((err) => console.log("error in in getGames", err));
}


// export function setWin(win) {
//   return db.query( `UPDATE games 
//       SET win=$1
//       RETURNING*`,
//       [win])
// }