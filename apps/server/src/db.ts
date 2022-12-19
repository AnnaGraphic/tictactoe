import * as dotenv from 'dotenv';
const database = 'ultimatetictactoe';
const spicedPg = require('spiced-pg');
const db = spicedPg(process.env.DATABASE_URL);

function insertUserXName(name_x) {
  return db
    .query(
      `INSERT INTO games (user_x) VALUES($1)
        RETURNING*`,
      [name_x]
    )
    .then((result) => {
      console.log(
        'result insert user x',
        result,
        'result.rows[0]',
        result.rows[0]
      );
      return result.rows[0];
    })
    .catch((err) => console.log(err));
}

function insertUserOName(name_o, id) {
  return db
    .query(
      `UPDATE games SET ser_o=$1 WHERE id=$2
      RETURNING*`,
      [name_o, id]
    )
    .then((result) => {
      console.log(
        'result insert user x',
        result,
        'result.rows[0]',
        result.rows[0]
      );
      return result.rows[0];
    })
    .catch((err) => console.log(err));
}
module.exports = {
  insertUserXName,
};
