import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
 class ParentComponent extends Component {
constructor(props){
    super(props)

    this.state ={
        parentName:'Parent'
    }
    this.greetParent=this.greetParent.bind(this)
}

greetParent(childName){
    alert(`hello ${this.state.parentName} from ${childName}`)
    // back tick and dollar curly tracer is the feature of ES6 but the react
}
    render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
