import "./setup"
import BookBuilderSelector from "./BookBuilderSelector"

const expect = require("chai").expect

describe("Book Builder", function() {
  let form

  beforeEach(function () {
    form = new BookBuilderSelector()
  })

  it("shows the form", function() {
    expect(form.exists()).to.eql(true)
  })

  it("shows book name field", function () {
    expect(form.getNameFieldLabelText()).to.eql("Book Name")
    expect(form.getNameFieldInputValue()).to.eql("")
  })
})