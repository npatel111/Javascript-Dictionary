function createWord(input){
  //debugger
  let word = new Word(input)
  getDefinition(word)
  displayWord(word.word)
  // $('.container #definition').empty()
  //debugger
}
