function getGif(word) {
  $.ajax({
  method: "GET",
  url: `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC`,
}).done(function (response) {
    displayGif(response)
  })
}
