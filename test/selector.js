import {Simulate} from "react-dom/test-utils"

const trigger = ($elem, event, config = {}) => {
  const trigger = Simulate[event]
  if (!$elem.length) throw new Error(`${event} target does not exist`)
  trigger($elem[0], config)
}

export default class Selector {
  constructor (selector) {
    this.selector = selector
    this.elem = $(selector)
  }
}