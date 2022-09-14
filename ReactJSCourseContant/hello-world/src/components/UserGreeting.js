import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
    super(props)
    this.state={
        isLoggedIn: true 
    
    }
}
  render() {
    // approach 4 SHORT CIRCUIT OPERATOR 
    return this.state.isLoggedIn && <div>Welcome Nabeela </div>

  }
/* 
    // approach 3 TERNARY CONDITIONAL OPERATOR
return (
    this.state.isLoggedIn ? (
    <div>Welcome Nabeela </div>
    ) : (
    <div>Welcome guest</div>
)
) */ 
    
/* //approach 2 ELEMEMT VARIABLE
    let message 
    if(this.state.isLoggedIn){
        message = <div>Welcome Nabeela </div>
    }
    else{
        message = <div>Welcome Guest </div>
    }
    return <div>{message}</div>
 *//* 
   // approach 1 if else
    if(this.state.isLoggedIn){
        return <div>Welcome Nabeela </div>
    } else {
        return <div>Welcome Guest </div>
    }
     */
    // return (
    //   <div>
    //     <div>Welcome Nabeela </div>
    // <div>Welcome Guest</div>
    //   </div>
    // )
  

  }
export default UserGreeting