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
      $(this).val(" ");
      $("#prompt").html(" ");
      $("#AM").html("Hey There");


    //   for (var i=0, i<10, i++)
    //   if (@moviename === " ") {
    //       atPoster
    //   }
    // //   console.log(userInput);
    //   $("#UL").html(userInput);
    });
   });
  });
