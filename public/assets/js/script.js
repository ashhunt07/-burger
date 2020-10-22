// Script

$(function() {
    console.log("Loaded!!");

    // Add a new burger button
    $(".add-btn").on("click", function(event) {
        event.preventDefault();

        var addBurg = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };

        //Sent the request!
        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurg
        }).then(function(res) {
            console.log("Adding the Burger!");
            console.log(res);
            location.reload();
        });
    });







});