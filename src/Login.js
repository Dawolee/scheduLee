import React, { Component } from 'react'
import fire from './fire'
import { Form, Button, Segment } from 'semantic-ui-react'

export default class SignUp extends Component {
  handleSubmit = evt => {
    let email = evt.target.email.value
    let password = evt.target.password.value
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        let user = fire.auth().currentUser
        this.props.login(user)
        this.props.history.push('/')
      })
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.')
        } else {
          alert(errorMessage)
        }
        console.log(error)
      })
  }

  render() {
    return (
      <div className="auth">
        <h1 className="login-header">Login Here!</h1>
        <Segment className="auth-form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input name="email" placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input name="password" placeholder="Password" />
            </Form.Field>
            <Button type="submit">Login</Button>
          </Form>
        </Segment>
      </div>
    )
  }
}
