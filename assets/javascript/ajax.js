
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
        }).then(function (response) {
            console.log(response);
            // Setting Current Temp and Current Weather to get later.
            var currentTemp = Math.floor(((response.main.temp) - 273) * 1.80 + 32);
            var currentWeather = response.weather[0].main; 
            
            // Appending the temp and weather.
            $("#temp").html($("<h1>").text("The Current Tempreture is "  + currentTemp + " degrees!"));
            $("#weather").html($("<h1>").text("Skies: " + currentWeather + "!"));
            
         });

    });
});
