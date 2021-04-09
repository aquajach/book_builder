import Selector from "./selector"

export default class BookBuilderFormSelector extends Selector {
  constructor () {
    super("#book-builder-form")
  }

  getNameLabel() {
    return this.find('.name-label')
  }

  getNameInput() {
    return this.find('.name-input')
  }
}