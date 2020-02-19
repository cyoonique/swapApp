const { Pool } = require('pg');

const pool = new Pool({
  connectionString:
    'postgres://rwydgpvs:XkNEIGaXKeE0dJfbgKNZrmobNT761l19@rajje.db.elephantsql.com:5432/rwydgpvs'
});

module.exports = {
  query: (text, values, callback) => {
    console.log('executed query', text);
    return pool.query(text, values, callback);
  }
};
