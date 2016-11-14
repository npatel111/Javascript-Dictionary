// (function () {
//   $('#clickme').hide()
// }())

$(document).ready(function() { // on document ready
  newForm()
  $('#clickme').hide()
  $('#anotherGif').hide()
  // tasksController = new tasksController();
  // tasksController.init();
})

// // listsController.prototype.init = function () {
// //   this.$addTaskForm.hide()
// // }

function newForm() {
  $('form').on('submit', function(){
    event.preventDefault()
    $('form').hide()
    $('#clickme').show()
    $('#anotherGif').show()
    createWord($('#word').val())
    createGif($('#word').val())
  })
}

function anotherForm() {
  // debugger
  $('form #word').val("")
  // debugger
  $('#search').empty()
  $('#definition').empty()
  $('#gif').empty()
  $('form').show()
  $('#clickme').hide()
  // newForm()
  $('form').on('submit', function(){
    event.preventDefault()
    createWord($('#word').val())
    createGif($('#word').val())
    // createDefinition($('#word').val())
  })
}

$(function (){
  $('#random').on('click', function(){
    event.preventDefault()
    $('form').hide()
    $('#clickme').show()
    randomWord()
    // createDefinition($('#word').val())
  })
})

// $(function (){
//   $('form').on('submit', function(){
//     event.preventDefault()
//     $('form').hide()
//     $('#clickme').show()
//     createWord($('#word').val())
//     createGif($('#word').val())
//     // createDefinition($('#word').val())
//   })
// })

// function randomWord() {
//   let requestStr = "http://randomword.setgetgo.com/get.php";
//   $.ajax({
//     type: "GET",
//     url: requestStr,
//     dataType: "jsonp",
//     jsonpCallback: 'RandomWordComplete'
//   }).done(function (response) {
//     createWord(response.Word)
//     createGif(response.Word)
//     // debugger
//   })
// }

function displayWord(word) {
  $('#search').append(`${word}`)
}

function getDefinition(word) {
  // debugger
  $.ajax({
  method: "GET",
  url: `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${word.word}`,
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Authorization", "0Pj9sD3WmEmshc4ksOMtS4dyEOGIp1aNbr3jsnrxphIFkVMYVh");
  }
  }).done(function (response) {
    debugger
    if (response.result_type === "no_results") { displayDefinition(response)} else {
      let definition = new Definition(response.list[0].definition)
      word.definition = definition
      word.example = response.list[0].example
      displayDefinition(response)
    }
  })
}

function displayDefinition(response) {
  let firstdef = response.list[0]
  if (!firstdef){
    $('#definition').append("'This word is too weird - Niti Patel'")
  }else {
    $('#definition').append(`${firstdef.definition}<br><br>${firstdef.example}`)
  }
}

function displayGif(response) {
  let firstgif = response.data[0]
  if (!firstgif) {
    $('#gif').append(`<img src="giphy.gif" />`)
  }else{
    store.gifs[store.gifs.length-1].url = firstgif.images.original.url //stores gif url
    $('#gif').append(`<img src="${firstgif.images.original.url}" />`)//shows gif
  }
}

$('.raptor').raptorize();

$( "#clickme" ).click(function() {
  $( ".container" ).animate({
    opacity: 0.25,
    left: "+=50",
    width: "toggle"
  }, 1000, function() {
    // setTimeout(function () {
    //   document.location.reload(false)
    // }, 1500);
    anotherForm()
  });
});

function nextGif(word) {
  $.ajax({
  method: "GET",
  url: `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC`,
  }).done(function (response) {
    displayGif(response)
    $('#gif').append(`<button id="anotherGif" onclick="nextGif('${word}')">and another!</button>`)
  })
}
