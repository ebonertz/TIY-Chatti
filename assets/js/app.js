$(function () {
    'use strict';
// $(".glyphicon-remove").click(function(){
//     $("#MC").html(" ");
//     $("#IM").html(" ");
// });


var userInput = $("input");

$(".btn-success").click(function() {
 $("input").each(function(){

      $("ul").append("<li>" + $(this).val() + "</li>" + "<br>" );
      event.preventDefault();
      $(this).val(" ");
      $("#prompt").html(" ")
    //   console.log(userInput);
    //   $("#UL").html(userInput);
    });
   });
  });

  //



//          $("#MC").html(" ");
//
//         console.log("GIVER");
//
//     });
//
// $(".btn-success").click(function(){
//     $("#IM").html("messages");
//     event.preventDefault();
//     console.log(chatter);






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

// function showInput() {
//     var message_entered = document .getElementbyID("chatter").value;
//         document.ElementByID("#IM").innerHTML = message_entered;
//         console.log(message_entered);
//         event.preventDefault();
// }




//  $.getJSON( "test.js", { name: "John", time: "2pm" } )
//   .done(function( json ) {
//     console.log( "JSON Data: " + json.users[ 3 ].name );
// }) //Then load the JSON data from test.js and accessing a name.
//   .fail(function( jqxhr, textStatus, error ) {
//     var err = textStatus + ", " + error;
//     console.log( "Request Failed: " + err );
// });
