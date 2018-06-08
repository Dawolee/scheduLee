import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export default () => {
  return (
    <Menu compact borderless attached inverted>
      <Menu.Item name="ScheduLee" position="left" />
      <Menu.Item>
        <Button primary>Sign up</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Log-in</Button>
      </Menu.Item>
    </Menu>
  )
}
