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





//     var ghAPI ="http://api.github.com/users/"
//     $.getJSON ( ghAPI, {
//         key : "value",
//         key: "value",
//     })
//
// $.ajax({
//   dataType: 'json',
//   url: 'https://api.github.com/users'
//   method: 'GET', // This is the default, but I thought I'd show it
// }).done(function (data) {
//   console.log(data.map(function (u) {
//     return u.login;
//   }));
// });

//load data from a local test.js file
// $.getJSON( "test.js", function( json ) {
//   console.log( "JSON Data: " + json.users[ 0 ].name );
//  });
//  });



//  $.getJSON( "test.js", { name: "John", time: "2pm" } )
//   .done(function( json ) {
//     console.log( "JSON Data: " + json.users[ 3 ].name );
// }) //Then load the JSON data from test.js and accessing a name.
//   .fail(function( jqxhr, textStatus, error ) {
//     var err = textStatus + ", " + error;
//     console.log( "Request Failed: " + err );
// });
