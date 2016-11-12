$(function(){
  $('form').on('submit', function(){
    event.preventDefault()
    createWord($('#word').val())
    createGif($('#word').val())
  })
})

function getDefinition(word) {
  $.ajax({
  method: "GET",
  url: `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${word}`,
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Authorization", "0Pj9sD3WmEmshc4ksOMtS4dyEOGIp1aNbr3jsnrxphIFkVMYVh"); // Enter here your Mashape key
  }
  }).done(function (response) {
    displayDefinition(response)
  })
}

function displayDefinition(response) {
  let firstdef = response.list[0]
  store.words[store.words.length-1].definition = firstdef.definition //stores definition
  store.words[store.words.length-1].example = firstdef.example //stores example
  $('#definition').append(`<ul><li>${firstdef.definition}</li><br><li>${firstdef.example}</li></ul>`) //gives definition
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
  let firstgif = response.data[0]
  store.gifs[store.gifs.length-1].url = firstgif.images.original.url //stores gif url
  $('#gif').append(`<img src="${firstgif.images.original.url}" />`)//shows gif

}
