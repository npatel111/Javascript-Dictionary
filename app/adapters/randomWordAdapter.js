function randomWord() {
  $.ajax({
    type: "GET",
    url: 'http://randomword.setgetgo.com/get.php',
    dataType: "jsonp"
  }).done(function (response) {
    createWord(response.Word)
    createGif(response.Word)
  })
}
