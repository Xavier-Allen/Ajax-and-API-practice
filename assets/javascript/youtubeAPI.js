// Setting up a rough draft for the Playlist function.
// Creates a function that takes in the temp and skies and coverts the Value to strings
function stringGetter(temp, skies) {
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
        return "96+ Sunny";
    }
}