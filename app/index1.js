$(document).ready(function() {
  newForm()
})

function newForm() {
  $('form').on('submit', function(e){
    event.preventDefault()
    let word = e.target.children[0].value
    $('form').hide()
    $('.secondPage').show()
    getDefinition(word)
    getGif(word)
  })
}

function displayWord(word) {
  $('.search').append(`${word}<br>`)
}

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
    $('.definition').append(`<p>${def.definition}</p><p>${def.example}</p>`)
  }
}
