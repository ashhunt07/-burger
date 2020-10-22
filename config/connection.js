// Requirements
const mysql = require("mysql");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
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
};

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;