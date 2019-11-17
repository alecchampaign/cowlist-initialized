const mysql = require('mysql');;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'cowMatrix'
});

connection.connect();

module.exports = connection;