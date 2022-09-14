import React, { Component } from 'react'

class EventBind extends Component {
constructor(props){
    super(props)

    this.state = {
        message: 'Hello'
    }// Approach 3 "BIND IN THE CLASS CONSTRUCTOR" 
  //  this.clickHAndler=this.clickHAndler.bind(this)

}

/* clickHAndler(){
    this.setState({
        message:'GoodBye'
    })
    console.log(this)

 */  
// 4th approach  CLASS PROPERTY HAS ARROW FUNCTIONS
clickHAndler= () => {
    this.setState({
        message:'GoodBye'
    })
}

render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Approach 1 BINDING IN RENDER */}
        {/* <button onClick={this.clickHAndler.bind(this)}>Click</button> */}
         {/* Approach 2 ARROW FUNCTION IN RENDER*/}
        {/* <button onClick={() => this.clickHAndler()}> Click</button> */}
         {/* Approach 3*/}
          {/* APPROACH 3 AND 4 ARE THE BEST OPTIONS */}
        <button onClick={this.clickHAndler}> Click</button>
      
      </div>
    )
  }
}

export default EventBind
