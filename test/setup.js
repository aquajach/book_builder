import MainTestContainer from "./MainTestContainer.js"
import "./dom"

beforeEach(function () {
  this.app = new MainTestContainer()
  this.app.start()
})

afterEach(function () {  
  this.app.stop()
})