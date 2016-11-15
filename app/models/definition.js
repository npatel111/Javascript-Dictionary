const Definition = (function() {
  let id = 0
  return class {
    constructor(definition){
      this.id = ++id
      this.definition = definition
      store.definitions = [...store.definitions, this]
    }
  }
}())
