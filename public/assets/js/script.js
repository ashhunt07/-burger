// Script

$(function() {


    $(".getDevoured").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newdevoured = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newdevoured
        }).then(function() {
            console.log("You ate it!");
            // Reload the page to get the updated list
            location.reload();
        });
    });



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


    $(".getDelete").on("click", function() {
        let id = $(this).data("id");

        let currentURL = window.location.origin;
        // Send the DELETE request.
        $.ajax(currentURL + "/api/burgers/" + id, {
            type: "DELETE",
        }).then(function() {
            console.log("id: " + id + "is deleted!");
            $(".getDelete" + id).remove();
            location.reload();
        });
    });



});