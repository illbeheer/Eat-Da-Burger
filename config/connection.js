// Set up MySQL connection.
var mysql = require("mysql");mysql://n18ribuyqwear39g:eyvyuu4g6qqrkc3h@jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/pdxfmh76g078f0w4

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "coconut",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
