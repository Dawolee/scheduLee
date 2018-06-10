import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'

export default class Navbar extends Component {
  render() {
    return (
      <Menu compact borderless attached inverted>
        <Menu.Item position="left">
          <NavLink to="/">ScheduLee</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/signup">
            <Button primary>Sign up</Button>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/login">
            <Button>Log-in</Button>
          </NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}
