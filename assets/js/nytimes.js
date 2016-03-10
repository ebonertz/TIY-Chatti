function nytimes(){

    var userInput = $('#chatter').val();
    var data = $("input").val().replace("@nyt ", "");

    $.getJSON('http://api.nytimes.com/svc/mostpopular/v2/mostviewed/US/1.json?api-key=f30a36832e8d9a3e865bd4549ceb6abc%3A18%3A74656186', function(data) {
                    alert('JSON data string is: '+ data);
                    console.log(data);
                });
};
