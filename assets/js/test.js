$(function () {
    'use strict';
$(".glyphicon-remove").click(function(){
    $("#AM").html(" ");
    $("#IM").html(" ");
});

    //     $("input").each(function() {
    //
    // $("ul").append("<li>" + $(this).val() + "</li>" );
    // $("#prompt").html(" ");
    // $(this).val("");
    // });
    var userInput = $("input").val();

    $(".btn-success").click(function() {
        $("input").each(function(){
         event.stopPropagation();
         console.log(userInput[0].value);
         alert("The span element was clicked.");
         event.preventDefault();

    for (var i = 0; i < userInput.length; i++)  {

    if (userInput[i].value == "@help" ) {
        console.log("userInput[i].value");
        $("ul").append("<li class='response'>" + "How can I help you?" + "</li>");
    }
    else if(userInput[i].value == "@gh" ) {
        ghprofile();


                };
            };
        });
    });
});
// end of for loop

    // Test Stuff
   //      $(".btn-success").click(function() {
   //          $("input").each(function(){
   //
   //    $("ul").append("<li>" + $(this).val() + "</li>" );
   //    event.preventDefault();
   //    $("#prompt").html(" ");
   //
   //    if($(this).val() == "@help") {
   //        $("ul").append("<li class='response'>" + "How can I help you?" + "</li>" )
   //    }
   //
   //    else if($(this).val().includes("@gh")){
   //        ghprofile();
   //    }
   //      $(this).val("");
   //  });
   // });
