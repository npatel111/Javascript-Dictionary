$(function(){
  $('form').on('submit', function(){
    event.preventDefault()
    let word = $('#word').val()
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

// $.ajax({
//     url: `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${word}`,  // The URL to the API. You can get this in the API page of the API you intend to consume
//     type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
//     data: {}, // Additional parameters here
//     dataType: 'json',
//     success: function(data) { console.dir((data.source)); },
//     error: function(err) { alert(err); },
//     beforeSend: function(xhr) {
//     xhr.setRequestHeader("X-Mashape-Authorization", "0Pj9sD3WmEmshc4ksOMtS4dyEOGIp1aNbr3jsnrxphIFkVMYVh"); // Enter here your Mashape key
//     }
