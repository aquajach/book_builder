import Selector from "./selector"
import "./setup"

const expect = require("chai").expect

describe("Book Builder", function() {
  const container = new Selector('body')

  it("shows the from", function() {
    expect(container.has("#book-builder")).to.eql(true)
  })
})