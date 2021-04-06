import MainTestContainer from "./MainTestContainer.js"

beforeEach(function () {
  this.app = new MainTestContainer()
  this.app.start()
})

afterEach(function () {  
  this.app.stop()
})