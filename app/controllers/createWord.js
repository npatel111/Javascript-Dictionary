function createWord(input){
  let word = new Word(input)
  getDefinition(word)
  displayWord(word.word)
}
