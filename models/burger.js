//Requirements
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

//Input burger information into ORM functions
const burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(value, cb) {
        orm.insertOne("burgers", value, function(res) {
            cb(res);
        });
    },

    updateOne: function(condition, id, cb) {
        condition = "devoured = true"
        orm.updateOne("burgers", condition, id, function(res) {
            cb(res);
        });
    },
}


module.exports = burger;