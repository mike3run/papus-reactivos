import React, { Component } from 'react';
import App from './App.js'

class AppContainer extends Component {
  state = {
    papus: undefined
  }

  render () {
    const { papus } = this.state

    return (
      <App papus={papus} />
    )
  }
}

export default AppContainer
