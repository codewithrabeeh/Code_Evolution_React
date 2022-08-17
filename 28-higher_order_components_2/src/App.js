import React, { Component } from 'react'
import './App.css'
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'


class App extends Component {
  
  

  render() {
    return (
      <div className='App'>
        <ClickCounter />
        <HoverCounter />
      </div>
    )
  }
}

export default App