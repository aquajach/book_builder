const jsdom = require('jsdom')
const { JSDOM } = jsdom;

const url = 'http://localhost'
const {window} = new JSDOM('<html><head><script></script></head><body></body></html>', {url})
global.document = window.document
global.window = window
window.addEventListener('error', function (event) {
  console.error('script error!!', event.error)
})

window.config = {
  environment: 'test'
}

global.navigator = {
  userAgent: 'node.js'
}
global.Node = window.Nodes

global.$ = require('jquery')
global.jQuery = global.$
$('body').html('<div id="jsdom_container"></div>')

global.getComputedStyle = function (dom) {
  return {
    width: '0px'
  }
}

global.requestAnimationFrame = function (callback) {
  return 0
}
global.cancelAnimationFrame = function (number) {
}

global.Object.entries = x =>
  Object.keys(x).reduce((y, z) =>
  y.push([z, x[z]]) && y, [])


global.HTMLElement = function () {}
