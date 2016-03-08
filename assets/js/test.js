    var myUser = "ebonertz"

    $.getJSON(("http://api.github.com/users/" + myUser), function (value) {
        console.log(value.company);
        $("#MC").html(value.company);
    });

    $(".btn-success").click(function() {
         $("#MC").html(" ");
         event.preventDefault();
        console.log("GIVER");

    });
