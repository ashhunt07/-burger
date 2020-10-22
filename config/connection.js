// Requirements
const mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    // Your port from MYSQL
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: process.env.MYSQLPW,
    // Primary Database
    database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;