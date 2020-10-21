// Requirements
const connection = require("./connection.js");


//Set up ORM
const orm = {

    //Select entire table
    selectAll: function(tableName, cb) {
        connection.query("SELECT * FROM " + tableName + ";", function(err, res) {
            if (err) throw err;
            // console.log(res);
            cb(res);
        });
    },

    //Insert item into table
    insertOne: function(table, value, cb) {
        connection.query("INSERT INTO" + table + " SET ?", function(err, res) {
            if (err) throw err;
            console.log(res);

            cb(res);
        });
    },

    //Update element in table
    updateOne: function(table, condition, id, cb) {
        connection.query("UPDATE" + table + "SET" + condition + "WHERE id = ?", function(err, res) {
            if (err) throw err;
            console.log(res);

            cb(res);
        });
    },
}

// Export the orm object for the model (burger.js)
module.exports = orm;