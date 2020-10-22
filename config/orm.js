// Requirements
const connection = require("./connection.js");


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}


//Set up ORM
let orm = {

    //Select entire table
    all: function(tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        console.log(queryString)

        connection.query(queryString, function(err, res) {
            if (err) { throw err; }
            console.log(res);
            cb(res);
        })

    },

    //Insert item into table
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });
    },


    //Update element in table
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }


            cb(res);
        });
    },



    //Remove element from table
    delete: function(table, condition, cb) {
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });
    },
};

// Export the orm object for the model (burger.js)
module.exports = orm;