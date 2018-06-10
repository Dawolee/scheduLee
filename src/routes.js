import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
// import fire from './fire'
import Homepage from './Homepage'
import LoginContainer from './LoginContainer'
import SignupContainer from './SignupContainer'

// let user = fire.auth().currentUser

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
