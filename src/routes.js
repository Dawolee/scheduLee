import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import Homepage from './Homepage'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
