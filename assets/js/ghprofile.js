function ghprofile(){

    var userInput = $('#chatter').val();
    var user = $("input").val().replace("@gh ", "");
    $.getJSON("https://api.github.com/users/" + user, function(data){
        $("ul").append("<li class='response'>"
        + data.name +"<br>"
        + data.location
        + "</li>" + "<br>" )
        console.log(data);


    });
}
