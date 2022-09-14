import React from 'react'

 function FunctionClick() {
   function clickHandler(){
    console.log('Button Clicked')
   }
    return (
     <div>
       <button onClick={clickHandler()}>Click</button>
     </div>
   )
 }
export default FunctionClick


// with clickHandler() the message will be shown without 
// clicking the button, with clickHandler() the message 
// will show when you click the button
// eventHandler is a function not a function call
 