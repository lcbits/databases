var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  if(err) {
    console.log('Unable to connect to the database');
  } else {
    console.log('Successfully connected!');
  }
});

module.exports = connection;

