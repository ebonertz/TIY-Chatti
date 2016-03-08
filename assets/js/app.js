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
      $("#prompt").html(" ");
      $("#AM").html("Return");


    //   for (var i=0, i<10, i++)
    //   if (@moviename === " ") {
    //       atPoster
    //   }
    // //   console.log(userInput);
    //   $("#UL").html(userInput);
    });
   });
  });
