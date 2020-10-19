// Requirements
const connection = require("./connection");

//Set up ORM
const orm = {

    //Select entire table
    selectAll: function(tableName) {
        connection.query("SELECT * FROM ??" + tableName + ";", function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    //Insert item into table
    insertOne: function(tableName, colName) {
        connection.query("INSERT INTO" + tableName + " VALUES " + colName + ";", function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    //Update element in table
    updateOne: function(tableName, colName, boolean, condition) {
        connection.query("UPDATE" + tableName + "SET" + colName + "=" + boolean + "WHERE" + condition + ";", function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
}

module.exports = orm;