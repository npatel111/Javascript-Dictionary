function getDefinition(input) {
  $.ajax({
    method: "GET",
    url: `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${input}`,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "0Pj9sD3WmEmshc4ksOMtS4dyEOGIp1aNbr3jsnrxphIFkVMYVh");
    }
  }).done(function (response) {
    if (response.result_type === "no_results") {
      displayDefinition(response)
    }
    else {
      let definition = response.list[0].definition
      let example = response.list[0].example
      displayDefinition(response)
    }
  })
}
