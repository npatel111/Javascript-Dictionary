
$(document).ready(function() { // on document ready
  newForm()
  $('#clickme').hide()
  $('#anotherGif').hide()
})

function newForm() {
  $('form').on('submit', function(){
    event.preventDefault()
    $('form').hide()
    $('#clickme').show()
    createWord($('#word').val())
    createGif($('#word').val())
  })
}

$(function (){
  $('#random').on('click', function(){
    event.preventDefault()
    $('form').hide()
    $('#clickme').show()
    randomWord()
  })
})

function displayWord(word) {
  $('#search').append(`${word}<br>`)
}

function displayDefinition(response) {
  let firstdef = response.list[0]
  if (!firstdef){
    $('#definition').append("")
  }else {
    $('#definition').append(`${firstdef.definition}<br><br>${firstdef.example}<br><br>`)
  }
}

function displayGif(response) {
  debugger
  let firstgif = response.data[0]
  if (!firstgif) {
    $('#gif').append(`<img src="images/giphy.gif" />`)
  }else{
    let responseLength = response.data.length
    let randgif = response.data[Math.floor(Math.random()*responseLength)]
      store.gifs[store.gifs.length-1].url = randgif.images.original.url //stores gif url
      $('#gif').empty().append(`<img src="${randgif.images.original.url}" /><br><div id="gifbutton"><button id="anotherGif" onclick="getGif('${store.gifs[store.gifs.length-1].word}')">and another!</button></div>`)//shows gif
      // $('#gif').append(`<button id="anotherGif" onclick="getGif('${store.gifs[store.gifs.length-1].word}')">and another!</button>`)
    // store.gifs[store.gifs.length-1].url = firstgif.images.original.url //stores gif url
    // $('#gif').append(`<img src="${firstgif.images.original.url}" />`)//shows gif
  }
}

$('.raptor').raptorize();

$( "#clickme" ).click(function() {
  $( ".container" ).animate({
    opacity: 0.25,
    left: "+=50",
    width: "toggle"
  }, 1000, function() {
    setTimeout(function () {
      document.location.reload(false)
    }, 1500);
  });
});
