import React, {Component} from 'react'

class BookBuilderForm extends Component {
  render () {
    return <form id="book-builder-form">
      <label className="name-label">Book Name</label>
      <input type="text" className="name-input"/>
    </form>
  }
}

export default BookBuilderForm