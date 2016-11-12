$(function(){
  $('form').on('submit', function(){
    event.preventDefault()
    let word = $('#word').val()
    let gif = $('#word').val()
    getDefinition(word)
    $('.container #definition').empty()
    getGif(word)
    $('.container #gif').empty()
    word = $('#word').val('')
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
  definition = response.list[0].definition//gives definition
  document.getElementById('#definition').append(definition)
  // debugger
  $('#definition').append(`<ul><li>${response.list[0].definition}</li><br><li>${response.list[0].example}</li></ul>`)//gives definition
}

function getGif(word) {
  $.ajax({
  method: "GET",
  url: `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC`,
  // beforeSend: function(xhr) {
  // xhr.setRequestHeader("X-Mashape-Authorization", "0Pj9sD3WmEmshc4ksOMtS4dyEOGIp1aNbr3jsnrxphIFkVMYVh"); // Enter here your Mashape key
  // }
  }).done(function (response) {
    displayGif(response)
  })
}

function displayGif(response) {
  // debugger
  let gif = response.data[0].images.original.url
  $('#gif').append(`<img src="${gif}" />`)//shows gif

}
