export default class Selector {
  constructor (selector) {
    this.selector = selector
    this.elem = $(selector)
  }

  find (dom) {
    const element = this.elem.find(dom)
    if (element.length === 0) throw Error(`Expected to find '${dom}' in '${this.selector}' but no match`)
    return element
  }

  has (selector) {
    console.log($(this.elem).html())
    const element = this.elem.find(selector)
    return element.length > 0
  }
}