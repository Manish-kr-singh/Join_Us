var faker = require('faker');
var express = require('express');
mysql = require('mysql');
var ejs = require('ejs');
app = express() ;
var data;
var bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public")) ;

var connection = mysql.createConnection({
  host : 'localhost',
  user :  'root',
  password : 'geeta2612',
  database : 'join_us'
}) ;


connection.connect(function(error){
  if(!!error){
    console.log('Error');
  } else {
    console.log('Connected');
  }
});


// @@@@@@@@@@@@@@@@@@@@@@    Selecting Data    @@@@@@@@@@@@@@@@@@@@@@@@@
// q = 'SELECT COUNT(*) AS total FROM users';
//
// app.get('/', function(req, resp){
//   //about mysql
//   connection.query(q ,function(error, rows, fields){
//     //callback
//     if(!!error){
//       console.log('Error');
//     } else {  //pars with rows/ fields
//       console.log(rows[0].total);
//         }
//   });
//
// });

// @@@@@@@@@@@@@@@@@@@@@@@@  INSERTING DATA  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

// q = 'INSERT INTO users (email) VALUES ("rusty@gmail.com")';
// app.get('/', function(req, resp){
// connection.query(q ,function(error, rows, fields){
//        //callback
//      if(!!error){
//       console.log('Error');
//      } else {  //pars with rows/ fields
//        console.log(rows);
//          }
//    });
//  });

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  INSERTING DATA TAKE 2   @@@@@@@@@@@@@@@@@@@@@@@@@@
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
//
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//@@@@@@@@@@@@@@@@@@@@@@@@@@    INSERTING LOTS OF DATA      @@@@@@@@@@@@@@@@@@@@@

// var data = [];
// for(var i = 0; i < 500; i++){
//     data.push([
//         faker.internet.email(),
//         faker.date.past()
//     ]);
// }
//
//
// var q = 'INSERT INTO users (email, created_at) VALUES ?';
//
// connection.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });
//

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@  GET ROUTE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.get("/", function(req, res){
  //find the total number of users in DB
  q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function(err, results){
    if (err) throw err;
    var count = results[0].count;
       res.render("home", {count: count});
  });
});

// @@@@@@@@@@@@@@@@@@@@@@   POST METHOD @@@@@@@@@@@@@@@@@@@@@@@@@@

app.post('/register', function(req,res){
  //console.log("Post Requst Sent");
  var person = {email: req.body.email};
  connection.query('INSERT INTO users SET ?', person, function(err, result) {
  if (err) throw err;
  res.redirect("/");
  //res.send("Thanks For Joining");
  });
});









app.listen(1337, function(){
  console.log("Server started at !_#_#_7");
});
