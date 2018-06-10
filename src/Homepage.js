import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'

import Footer from './Footer'

class Homepage extends Component {
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
        <div className="App">
          <div className="App-header">
            <div className="inside-banner">
              <h1 className="larger-font">Scheduling Made Easy</h1>
              <p>Making remembering tasks and hobbies 'simplee' easy!</p>
              <div className="login-signup">
                <NavLink to="/signup">
                  <Button primary>Sign Up Now</Button>
                </NavLink>
                <span>or</span>
                <NavLink to="/login">
                  <Button secondary>Login</Button>
                </NavLink>
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
            'A Easy to Use App',
            'Very intuitive and simple design! Easy to start planning and keeping track of your to-dos!'
          )}
        </Card.Group>
        <div className="get-started">
          <Button size="big">Get Started Now!</Button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Homepage
