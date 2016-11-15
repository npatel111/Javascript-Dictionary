const Gif = (function(){
  let id = 0
  return class {
    constructor(word){
      this.id = ++id
      this.word = word
      store.gifs = [...store.gifs, this]
    }
  }
}())
