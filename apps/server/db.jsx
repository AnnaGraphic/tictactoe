const database = 'ultimatetictactoe';
//5432 = standardport
const db = spicedPg(
  process.env.DATABASE_URL ||
    `postgres:postgres:postgres@localhost:5432/${database}`
);

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

module.exports = {
  insertUserXName,
};
