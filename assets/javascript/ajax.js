
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

// Setting up a rough draft for the Playlist function.
// Creates a function that takes in the temp and skies and coverts the Value to strings
function stringValue(temp, skies) {
    if (temp <= 32) {
        if (skies === clouds || snow || rain || haze || mist || fog) {
            return "0-32 Overcast";
        }
        if (skies === clear) {
            return "0-32 Sunny";
        }
    } else if (temp >= 33 && temp <= 45) {
        if (skies === clouds || rain || haze || mist || fog) {
            return "33-45 Overcast";
        }
        else {
            return "33-45 Sunny";
        }
    } else if (temp >= 46 && temp <= 55) {
        if (skies == clouds || rain || mist || fog || haze) {
            return "46-55 Overcast";
        } else {
            return "46-55 Sunny";
        }
    }  else if (temp >= 56 && temp <= 69){
        if (skies === clouds || rain || mist || fog || haze){
            return "56-69 Overcast";
        } else {
            return "56-69 Sunny";
        }
    }   else if (temp >= 70 && temp <= 86){
        if (skies === clouds || rain || mist || fog || haze){
            return "70-86 Overcast";
        } else {
            return "70-86 Sunny";
        }
    }   else if (temp >= 87 && temp <= 95){
        if (skies === clouds || rain){
            return "87-95 Overcast";
        } else {
            return "87-95 Sunny";
            
        }
    } else {
        console.log("sunny");
        return "96+ Sunny";
    }
}
stringValue(currentTemp,currentWeather);
// Create Switch statements for different cases. Then call Youtube API
