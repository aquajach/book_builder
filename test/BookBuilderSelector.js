import Selector from "./selector"

export default class BookBuilderSelector extends Selector {
  constructor() {
    super("#book-builder")
  }

  exists() {
    return this.elem.length > 0
  }

  getNameFieldLabelText() {
    return this.find(".book-name label").text()
  }

  getNameFieldInputValue() {
    return this.find(".book-name input").val()
  }
}