import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App
