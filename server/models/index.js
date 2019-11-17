const db = require('../db/index.js');

module.exports = {
  get: (cb) => {
    db.connect.query('SELECT name, description FROM cows', (err, data) => {
      cb(err, results);
    });
  },
  post: (req, cb) => {
    db.connect.query('INSERT INTO cows(name, description) VALUES(?, ?)', [req.name, req.description], (err, data) => {
      cb(err, data);
    })
  },
  // TODO: Add put/delete methods
}