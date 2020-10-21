// Requirements
const express = require("express");

//Routers for Burger App
const router = express.Router();

// Import model (burger.js) to use its database functions
const burger = require("../models/burger");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});




// Export routes for server.js to use.
module.exports = router;