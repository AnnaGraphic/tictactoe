import * as dotenv from 'dotenv';
const database = 'ultimatetictactoe';
const spicedPg = require('spiced-pg');
const db = spicedPg(process.env.DATABASE_URL);

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

export function insertUserOName(name_o, avatar, id) {
  return db
    .query(
      `UPDATE games 
      SET user_o=$1, user_o_avatar=$2 WHERE id=$3
      RETURNING*`,
      [name_o, avatar, id]
    )
    .then((result) => {
      console.log(
        'result insert user o',
        result,
        'result.rows[0]',
        result.rows[0]
      );
      return result.rows[0];
    })
    .catch((err) => console.log("error in user O db", err));
}
