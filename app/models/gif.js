class Gif{
  constructor(word){
    this.word = word
    store.gifs = [...store.gifs, this]
  }
}
