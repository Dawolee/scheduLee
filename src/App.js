import React, { Component } from 'react'
import { Menu, Button, Card, Image } from 'semantic-ui-react'

import './App.css'
import Footer from './Footer'

class App extends Component {
  render() {
    const Cards = (imageURL, header, description) => (
      <Card size="small" className="single-card">
        <Image className="card-img" src={imageURL} />
        <Card.Content>
          <Card.Header>{header}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    )
    return (
      <div>
        <Menu borderless attached inverted>
          <Menu.Item name="ScheduLee" position="left" />
          <Menu.Item>
            <Button primary>Sign up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button>Log-in</Button>
          </Menu.Item>
        </Menu>
        <div className="App">
          <div className="App-header">
            <div className="inside-banner">
              <h1 className="larger-font">Scheduling Made Easy</h1>
              <p>Making remembering tasks and hobbies 'simplee' easy!</p>
              <div className="login-signup">
                <Button primary>Sign Up Now</Button>
                <span>or</span>
                <Button secondary>Login</Button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="about">What is ScheduLee?</h1>
        <Card.Group>
          {Cards(
            'https://jnba.com/wp-content/uploads/2017/07/Planning-logo.jpg',
            'Drag and Drop Customizable Schedule',
            'Keep track of everything you want, all in one place! Want to remember plans or watch a game? Simply make a card and drag it into your calendar!'
          )}
          {Cards(
            'http://halwits.com/wp-content/uploads/2017/08/app.jpg',
            'Progressive Web App',
            'Use ScheduLee on your computer or on any mobile device on the go without having to install an application!'
          )}
          {Cards(
            'http://thecontextofthings.com/wp-content/uploads/2017/02/easy-work.png',
            'Ease of Use',
            'Very intuitive and simple design! Easy to start planning and keeping track of your to-dos!'
          )}
        </Card.Group>
        <Footer />
      </div>
    )
  }
}

export default App
