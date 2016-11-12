class Word {
  constructor(word){
    this.word = word
    store.words = [...store.words, this]
  }
}
