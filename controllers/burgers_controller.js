// Requirements
const express = require("express");

//Routers for Burger App
const router = express.Router();

// Import model (burger.js) to use its database functions
const burger = require("../models/burger");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
        // res.render('index', { burgers: hbsObject });
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = `id = ${req.params.id}`;
    console.log("condition", condition);

    burger.update({
            devoured: req.body.devoured,
        }, condition,
        function(res) {
            if (res.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
                s
            }
        });
});


// Export routes for server.js to use.
module.exports = router;