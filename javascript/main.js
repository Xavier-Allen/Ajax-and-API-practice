// On Page load start app.
window.addEventListener("submit", event => {
  document.preventDefault();
  // Using a proxy to make requests to API
  const apikey = "trilogy";
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const movieTitle = document
    .querySelector("movieTitle")
    .value()
    .trim();
  const queryUrl = `${proxy}http://www.omdbapi.com/?apikey=${apikey}&t=${movieTitle}`;

  // Submit button on click
  document.getElementById("submit").onclock = movieSearch();
  // Movie Search function
  function movieSearch() {
    fetch(queryUrl)
      .then(response => {
        return response.json;
      })
      .then(data => {
        console.log(data);
      });
  }

  // Appening the message to the dom
  function setInvalid(field, message) {
    const errMessage = document.createElement("p");
    field.className = "invalid";
    field.errMessage.createTextNode(message);
  }

  // Checks if the value is empty and if it is throw err.
  function checkIfEmpty(field) {
    // If the field (AKA movieTitle) is empty throw err;
    if (ifEmpty(field.value.trim())) {
      setInvalid(field, `${field.name} must not be empty`);
      return true;
    } else {
      movieSearch(field);
      return false;
    }
  }

  // Checks if the field entered is empty or not.
  // This is a function for learning purposes on callbacks.
  function ifEmpty(value) {
    if (value.trim() === "") return true;
    return false;
  }
});
