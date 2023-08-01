import * as dotenv from 'dotenv';

const pg = require('pg');

const dbUrl = require('url').parse(process.env.DATABASE_URL);

const dbConfig =
      (() => {
          if (dbUrl.hostname) {
              // TCP case
              const dbUser = dbUrl.auth.split(':');
              return {
                  user: dbUser[0],
                  database: dbUrl.pathname.slice(1),
                  password: dbUser[1],
                  host: dbUrl.hostname,
                  port: dbUrl.port || 5432,
                  max: 10,
                  idleTimeoutMillis: 30000,
                  ssl: dbUrl.hostname != 'localhost' && dbUrl.hostname != '127.0.0.1' && {
                      rejectUnauthorized: false
                  }
              };
          } else {
              // UNIX socket case
              return {
                  user: process.env.USER,
                  database: dbUrl.pathname.slice(1),
              }
          }
      })();

const pool = new pg.Pool(dbConfig);

pool.on('error', function(err) {
    console.log(err);
});

function query(query, params) : any {
    return new Promise(function(resolve, reject) {
        pool.connect(function(err, client, done) {
            if (err) {
                reject(err);
            } else {
                client.query(query, params, function(err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                    done();
                });
            }
        });
    });
}

export function setGame(user_x, user_x_avatar, user_o, user_o_avatar) {
  return query(
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
  return query(
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
  return query(
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
  return query(
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
  return query(`SELECT * FROM games WHERE win <> ''
  ORDER BY id DESC`, []
  ).then((result) => {
    //console.log('result.rows in getGames ', result.rows)
      return result.rows;
    })
    .catch((err) => console.log("error in in getGames", err));
}

export function getGame(id) {
 // console.log("id", id)
  return query(`SELECT * FROM games WHERE id=$1`, [id])
  .then((result) => {
    console.log('result.rows in getGame ', result.rows)
      return result.rows[0];
    })
    .catch((err) => console.log("error in in getGames", err));
}


// export function setWin(win) {
//   return query( `UPDATE games 
//       SET win=$1
//       RETURNING*`,
//       [win])
// }