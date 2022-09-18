import React, { Component } from 'react'
import WithComponent from './WithCounter'

class HoverCounter extends Component {
  
    render() {
        const {count, incrementCount} =this.props 
    return <h2 onMouseOver={incrementCount}>  Hovered {count} time</h2>
    
  }
}

export default WithComponent(HoverCounter,10)
