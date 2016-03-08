$(document).ready(function(){

   $('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });

   var getPoster = function(){

        var film = $('#term').val();

         if(film == ''){

            $('#poster').html("<h2 class='loading'>Please enter your information.</h2>");

         } else {

            $('#poster').html("<h2 class='loading'>Please enjoy the movie [poster]!</h2>");

            $.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/
23afca60ebf72f8d88cdcae2c4f31866/" + film + "?callback=?", function(json) {
               if (json != "Nothing found."){
                     $('#poster').html('<h2 class="loading">Presenting...</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
                  } else {
                     $.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/
d782fd10f4090a596fd87182b50f6a00/goonies?callback=?", function(json) {
                        console.log(json);
                        $('#poster').html('<h2 class="loading">Sorry we could not find anything that matches your request. Please try again.</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
                     });
                  }
             });

          }

        return false;
   }

   $('#search').click(getPoster);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

});
