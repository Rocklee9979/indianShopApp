var test='express';

var express = require(test);
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

//app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));


// DB connection
const connection = mysql.createPool({
  host     : 'localhost', 
  user     : 'root',     
  password : '',        
  database : 'db_indianshop'   
});



// Creating a GET route that returns data from the 'users' table.
app.get('/tb_users_login', function (req, res) {
    // Connecting to the database.
    //res.send(req)
   

    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM tb_users_login', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Connected..');
});