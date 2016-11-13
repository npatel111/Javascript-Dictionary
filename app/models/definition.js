const Definition = (function() {
  let id = 0
  return class {
    constructor(definition){
      this.id = ++id
      this.definition = definition
      // this.word = word
      // this.wordId = wordId
      store.definitions = [...store.definitions, this]
    }
  }
}())
