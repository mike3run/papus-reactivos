import React, { Component } from 'react';
import App from './App.js'

class AppContainer extends Component {
  state = {
    user: 'mike3run',
    hasLoaded: false,
    fullName: undefined,
    picture: undefined
  }

  typeHandler = event => {
    event.preventDefault()
    const val = event.currentTarget.value
    this.setState({
      user: val
    })
  }

  fetchUser = user => async event => {
    event.preventDefault()
    try {
      const res = await fetch(`https://api.github.com/users/${user}`)
      const json = await res.json()
      this.setState({
        picture: json.avatar_url,
        fullName: json.name,
        hasLoaded: true
      })
    } catch (error) {
      console.log(error);
      this.setState({
        hasLoaded: false
      })
    }
  }

  render () {
    const { user, fullName, hasLoaded, picture } = this.state

    return (
      <App
        onChange={this.typeHandler}
        username={user}
        onSubmit={this.fetchUser(user)}
        fullName={fullName}
        picture={picture}
        hasLoaded={hasLoaded}
      />
    )
  }
}

export default AppContainer
