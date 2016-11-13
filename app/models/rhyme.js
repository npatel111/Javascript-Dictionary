const rhyme = 
class Rhyme {
  constructor(word){
    this.word = word
    store.rhymes = [...store.rhymes, this]
  }
}
