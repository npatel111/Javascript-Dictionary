$(document).ready(function() {
  newForm()
})

function newForm() {
  $('form').on('submit', function(e){
    event.preventDefault()
    let word = e.target.children[0].value
    $('.first-page').hide()
    $('.second-page').show()
    getDefinition(word)
    getGif(word)
    $('.definition').append(`<p>${word}</p>`)
  })
}

$(function (){
  $('.random').on('click', function(){
    event.preventDefault()
    $('.first-page').hide()
    $('.second-page').show()
    randomWord()
  })
})

function displayGif(response) {
  let firstgif = response.data[0]
  if (!firstgif) {
    getGif("puppies")
  }
  else {
    let responseLength = response.data.length
    let randgif = response.data[Math.floor(Math.random()*responseLength)]
    $('.gif').empty().append(`<button id="anotherGif" onclick="getGif('${$gif}')">and another!</button><img src="${randgif.images.original.url}"/>`)
  }
}

function displayDefinition(response) {
  let def = response.list[0]
  if (!def){
    $('.definition').append("No definition, but here's a gif to help cope: ")
  } else {
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
