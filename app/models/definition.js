
class Definition {
  constructor(definition){
    this.definition = definition
    store.definitions = [...store.definitions, this]
  }
}
