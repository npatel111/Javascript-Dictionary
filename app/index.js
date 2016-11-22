$(document).ready(function() {
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
    $('#definition').append("No definition, but here's a gif to help cope: ")
  } else {
    $('#definition').append(`${firstdef.definition}<br><br>${firstdef.example}<br><br>`)
  }
}

function displayGif(response) {
  let firstgif = response.data[0]
  if (!firstgif) {
    getGif("puppies")
  } else {
    let responseLength = response.data.length
    let randgif = response.data[Math.floor(Math.random()*responseLength)]
    store.gifs[store.gifs.length-1].url = randgif.images.original.url
    $('#gif').empty().append(`<img src="${randgif.images.original.url}" /><br><div id="gifbutton"><button id="anotherGif" onclick="getGif('${store.gifs[store.gifs.length-1].word}')">and another!</button></div>`)
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

var txt = 'type here'
var timeOut;
var txtLen = txt.length;
var char = 0;

// $('.input').attr('placeholder', '|');
// (function typeIt() {
//     var humanize = Math.round(Math.random() * (200 - 30)) + 30;
//     timeOut = setTimeout(function () {
//         char++;
//         var type = txt.substring(0, char);
//         $('.input').attr('placeholder', type + '|');
//         typeIt();
//
//         if (char == txtLen) {
//             $('.input').attr('placeholder', $('.input').attr('placeholder').slice(0, -1)) // remove the '|'
//             clearTimeout(timeOut);
//         }
//
//     }, humanize);
// }());

// $('.raptor').hover(function () {
//     alert ('hilaskfdjlasfdjfalksdj')
// })
