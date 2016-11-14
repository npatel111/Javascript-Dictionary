function getDefinition(word) {
  ////debugger
  $.ajax({
  method: "GET",
  url: `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${word.word}`,
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Authorization", "0Pj9sD3WmEmshc4ksOMtS4dyEOGIp1aNbr3jsnrxphIFkVMYVh");
  }
  }).done(function (response) {
    if (response.result_type === "no_results") { displayDefinition(response)} else {
      let definition = new Definition(response.list[0].definition)
      word.definition = definition
      word.example = response.list[0].example
      displayDefinition(response)
  }
})
}
