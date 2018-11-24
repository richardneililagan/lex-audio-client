import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render () {
    return (
      <div>This is a demo page.</div>
    )
  }
}

render(<App/>, document.getElementById('root'))
