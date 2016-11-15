function createGif(word){
  let gif = new Gif(word)
  getGif(gif.word)
  $('.container #gif').empty()
}
