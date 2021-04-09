import "./setup"
import React from 'react';
import MainContainer from "../MainContainer";
import BookBuilderFormSelector from "./bookBuilderFormSelector"

const expect = require("chai").expect

describe("Book Builder", function() {
  let form

  beforeEach(function() {
    form = new BookBuilderFormSelector()
  })

  it("finds the form", function () {
    expect($('body form#book-builder-form').length).to.eql(1)
  })

  it("finds the name field", function() {
    expect(form.getNameLabel().length).to.eql(1)
    expect(form.getNameInput().length).to.eql(1)
    expect(form.getNameLabel().text()).to.eql("Book Name")
  })

  //Add 2 more fields to the form, let's come back by 4:50
})