import React, { Component } from 'react'
import LifecycleB from './lifecycleB'
class lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Nabeela'
      }
    console.log('lifescycle  A constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle A  getDerivedStateFromProps')
        return null
    }
  
  componentDidMount(){
    console.log('Lifecycle A componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('lifecycle A shouldComponentUpdate')
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('lifecycle A getSnapshotBeforeUpdate')
return null
}

componentDidUpdate ()
{
    console.log('lifecycle A componentDodUpdate')
}

changeState = () => {
    this.setState({
        name:'Codeevolution'
    })
}

    render() {

        console.log('lifecycle A render')
    return (
      <div>
        Lifecycle A
        <button onChange={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    )
  }
}

export default lifecycle
