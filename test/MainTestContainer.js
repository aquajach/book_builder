import React from 'react'
import ReactDom from 'react-dom'
import MainContainer from '../MainContainer.jsx'

export default class MainTestContainer {
  constructor () {
    this.attachTo = $('#jsdom_container').get(0)
  }

  start () {
    ReactDom.render(<MainContainer />, this.attachTo)
  }

  stop () {
    ReactDom.unmountComponentAtNode(this.attachTo)
    this.attachTo.innerHTML = null
  }
}
