$(function(){
  $('form').on('submit', function(){
    event.preventDefault()
    let word = $('#word').val()
    let gif = $('#word').val()
    new Definition(word)
    new Gif(gif)
    getDefinition(word)
    getGif(gif)
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
}
