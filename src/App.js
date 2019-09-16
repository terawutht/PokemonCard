import React, { Component } from 'react'
import './App.css'
import MyPokedex from './pages/MyPokedex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container pt-2">
          <MyPokedex />
        </div>
      </div>
    )
  }
}

export default App
