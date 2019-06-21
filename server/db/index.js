var mysql = require('mysql');

//makes connection to the database using express
var connection = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  password: '170170',
  database: 'chat'
});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

module.exports = connection;

// module.exports.connection.query(query, callback);

//build our connection to mysql

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


