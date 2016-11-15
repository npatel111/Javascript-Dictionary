function randomWord() {
  $.ajax({
    type: "GET",
    url: 'http://www.setgetgo.com/randomword/get.php?len=6',
  
    dataType: "jsonp"
  }).done(function (response) {
    createWord(response.Word)
    createGif(response.Word)
  })
}
