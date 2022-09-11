import React from 'react'
/*
function Greet(){
    return <h1> Hello Maham</h1>
}*/
//export const Greet =() => <h1> Hello Maham</h1>

const Greet = props => {
console.log(props)
return <h1> Hello {props.name}</h1>
}
export default Greet
