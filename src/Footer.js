import React from 'react'
import { Menu, Segment, Container } from 'semantic-ui-react'

export default function Footer() {
  return (
    <Segment className="footer-design" inverted>
      <Container className="inner-footer">
        <Menu inverted secondary>
          <Menu.Item name="ScheduLee" />
        </Menu>
        <a href="https://github.com/Code-Bono/code-bono" target="_blank">
          <i className="fab fa-github fa-2x" />
        </a>
      </Container>
    </Segment>
  )
}
