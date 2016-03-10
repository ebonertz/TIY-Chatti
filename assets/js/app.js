$(function () {
    'use strict';
$(".glyphicon-remove").click(function(){
    $("#AM").html(" ");
    $("#IM").html(" ");
});
        var userInput = $("input");

        $(".btn-success").click(function() {
            $("input").each(function(){

      $("ul").append("<li>" + $(this).val() + "</li>" + "<br>" );
      event.preventDefault();
      $("#prompt").html(" ");

      if($(this).val() == "@help") {
          $("ul").append("<li class='response'>" + "Chicka Chicka Yeah" + "<br>" + "</li>" )
      }
     else if($(this).val() == "@hello") {
          $("ul").append("<li class='response'>" + "Gangstas!" + "<br>" + "</li>" )
      }

      else if($(this).val().includes("@gh")){
          ghprofile();
      }
      else if($(this).val().includes("@nyt")){
          nytimes();
      }
        $(this).val("");
    });
   });
  });

      //Check if input === @github username
      //then getJson
        // $.getJSON(("http://api.github.com/users/" + myUser), function (value) {
        //       console.log(value.company);
        //       $("#AM").html(value.company);
        //   });
        // PSUEDO CODE

    /// Attempt at FOR LOOP
//       for (var i=0, i<10, i++){
//        if (userInput[0]).value == " ") {
//           $("#AM").html("Hey There");
//       }
//        else if (userInput[0].includes === "help"){
//          $("#AM").html("What can we help with")
//     };
//    };

    // //   console.log(userInput);
    //   $("#UL").html(userInput);
