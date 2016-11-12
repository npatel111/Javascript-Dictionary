function createWord(input){
  let word = new Word($('#word').val())
  getDefinition(word.word)
  displayWord(word.word)
  $('.container #definition').empty()
}
