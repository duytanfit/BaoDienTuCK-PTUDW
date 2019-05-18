var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 8889,
  user     : 'root',
  password : 'root',
  database : 'testmysql'
});
 

connection.connect();
 
connection.query('SELECT * from categories', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  connection.end();
});
console.log('after');