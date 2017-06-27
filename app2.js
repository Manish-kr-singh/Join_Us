
var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user :  'root'
  database : 'join_us'
}) ;


connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results[0].solution);
});

connection.end();
//
//
// faker.internet.email()
// faker.date.past()
//
// console.log(faker.internet.email());
// console.log(faker.date.past()) ;
// console.log(faker.address.city());
//
//
//
//
// function generateAddress()
// {
//   console.log(faker.address.streetAddress()) ;
//   console.log(faker.address.city()) ;
//   console.log(faker.address.state()) ;
// }
//
// generateAddress();



// Inserting database
