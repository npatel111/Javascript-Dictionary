function randomWord() {
  let requestStr = "http://randomword.setgetgo.com/get.php";
  $.ajax({
    type: "GET",
    url: requestStr,
    dataType: "jsonp",
    jsonpCallback: 'RandomWordComplete'
  }).done(function (response) {
    createWord(response.Word)
    createGif(response.Word)
  })
}
