import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'
import fire from './fire'
import { logoutUser } from './store/auth'

class Navbar extends Component {
  handleClick = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        this.props.logout()
        alert('logged out successfully')
      })
      .catch(err => console.log(err))
  }
  render() {
    let user = this.props.user
    return (
      <Menu compact borderless attached inverted>
        <Menu.Item position="left">
          <NavLink to="/">ScheduLee</NavLink>
        </Menu.Item>
        <Menu.Item>
          {user ? (
            <NavLink to="/profile">
              <Button primary>Profile</Button>
            </NavLink>
          ) : (
            <NavLink to="/signup">
              <Button primary>Sign up</Button>
            </NavLink>
          )}
        </Menu.Item>
        <Menu.Item>
          {user ? (
            <Button onClick={this.handleClick} primary>
              Logout
            </Button>
          ) : (
            <NavLink to="/login">
              <Button>Log-in</Button>
            </NavLink>
          )}
        </Menu.Item>
      </Menu>
    )
  }
}

const mapState = state => {
  return {
    user: state.auth
  }
}

const mapDispatch = dispatch => {
  return {
    logout: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Navbar)
