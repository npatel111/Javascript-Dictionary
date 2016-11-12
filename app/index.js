$(function(){
  $('form').on('submit', function(){
    event.preventDefault()
    $('form').hide()
    createWord($('#word').val())
    createGif($('#word').val())
  })
})

function getDefinition(word) {
  $.ajax({
  method: "GET",
  url: `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${word}`,
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Authorization", "0Pj9sD3WmEmshc4ksOMtS4dyEOGIp1aNbr3jsnrxphIFkVMYVh");
  }
  }).done(function (response) {
    displayDefinition(response)
  })
}

function displayDefinition(response) {
  word.definition = response.list[0].definition
  word.example = response.list[0].example
  $('#definition').append(`<ul><li>${word.definition}</li><br><li>${word.example}</li></ul>`)
}

function getGif(word) {
  $.ajax({
  method: "GET",
  url: `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC`,
  }).done(function (response) {
    displayGif(response)
  })
}

function displayGif(response) {
  gif.url = response.data[0].images.original.url
  $('#gif').append(`<img src="${gif.url}" />`)//shows gif
}
