import React, { Component } from 'react'

class ClickCounter extends Component {
  
    
    render() {
    const {count, incrementCount} = this.props
    return (
      <button onClick={incrementCount}>Clicked {count} Times</button>
    )
  }
}

export default ClickCounter