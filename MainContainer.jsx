import React, {Component} from 'react'
import {Form} from "semantic-ui-react"

class MainContainer extends Component {
  render () {
    return (
      <Form id="book-builder">
        <Form.Field className="book-name">
          <label className="form-label">Book Name</label>
          <input placeholder="Enter a short name" className="form-input"/>
        </Form.Field>
      </Form>
    )
  }
}

export default MainContainer