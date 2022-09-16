import React, { Component } from 'react'

class lifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Nabeela'
      }
    console.log('lifescycle B constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle B getDerivedStateFromProps')
        return null
    }
  
  componentDidMount(){
    console.log('Lifecycle B componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('lifecycle B shouldComponentUpdate')
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('lifecycle B getSnapshotBeforeUpdate')
return null
}

componentDidUpdate ()
{
    console.log('lifecycle B componentDodUpdate')
}
 
    render() {

        console.log('lifecycle B render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default lifecycleB
