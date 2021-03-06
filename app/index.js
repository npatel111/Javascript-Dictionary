$(document).ready(function() {
  $('.raptor-nav').hide()
  newForm()
})

function newForm() {
  $('form').on('submit', function(event){
    event.preventDefault()
    $('.first-page').hide()
    $('.raptor-nav').show()
    var word = event.target.children[0].value
    if (word === '') {
      word = 'puppies'
    }
    getDefinition(word)
    getGif(word)
    $('.definition').append(`<p>${word}</p>`)
  })
}

$(function (){
  $('.random').on('click', function(event){
    event.preventDefault()
    $('.first-page').hide()
    $('.raptor-nav').show()
    randomWord()
  })
})

function displayGif(response) {
  var firstgif = response.data[0]
  if (!firstgif) {
    getGif("puppies")
  }
  else {
    var responseLength = response.data.length
    var randgif = response.data[Math.floor(Math.random()*responseLength)]
    $('.gif').empty().append(`<button id="anotherGif" onclick="getGif('${$gif}')">and another!</button><img src="${randgif.images.original.url}"/>`)
  }
}

function displayDefinition(response) {
  var def = response.list[0]
  if (!def){
    $('.definition').append("No definition, but here's a gif to help cope: ")
  }
  else {
    $('.definition').append(`<p>${def.definition}</p><br><p>${def.example}</p>`)
  }
}

$('.raptor').raptorize();

$( "#clickme" ).click(function() {
  $( ".container" ).animate({
    opacity: 0.25,
    left: "+=50",
    width: "toggle"
  }, 2000, function() {
    setTimeout(function () {
      document.location.reload(false)
    }, 1000);
  });
});
