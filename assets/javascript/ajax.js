
$(document).ready(function () {


    // jQuery On Click event for adding the city
    $("#cityName").on("click", function (event) {
        event.preventDefault();
        // This is the User Input for the city name
        var userInput = $("#city").val().trim();

        var apiKey = "39f137c523ad333675cebf77a244c923";
        //Creating the queryURL.
        var queryURL = "https://corsbridge.herokuapp.com/" + 
            encodeURIComponent("http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + apiKey);

        // Ajax Call for the location
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (resposne) {
            console.log(resposne);
        });

    });
});
