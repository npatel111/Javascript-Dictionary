function getDefinition(input) {
  $.ajax({
    method: "GET",
    url: `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${input}`,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "0Pj9sD3WmEmshc4ksOMtS4dyEOGIp1aNbr3jsnrxphIFkVMYVh");
    }
  }).done(function (response) {
    if (response.result_type === "no_results") {
      displayDefinition(response)
    }
    else {
      displayDefinition(response)
    }
  })
}

function getGif(word) {
  $gif = word
  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC`,
  }).done(function (response) {
    displayGif(response)
  })
}

function randomWord() {
  $.ajax({
    type: "GET",
    url: 'http://www.setgetgo.com/randomword/get.php?len=6',
    dataType: "jsonp"
  }).done(function (response) {
    var word = response.Word
    getDefinition(word)
    getGif(word)
    $('.definition').append(`<p>${word}</p>`)
  })
}
