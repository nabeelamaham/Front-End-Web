import React from 'react'
/* "Method 1 "
function Greet(){
    return <h1> Hello Maham</h1>
}*/
//export const Greet =() => <h1> Hello Maham</h1>
// "Method 2"
/* 
const Greet = props => {
console.log(props)
return (
<div>
<h1>
     Hello {props.name}  a.k.a    {props.heroName}
     </h1>
     {props.children}
     </div>
)
}
export default Greet
 */
//Destructuring props 1 method
/*const Greet = ({name, heroName}) => {
    return (
    <div>
    <h1>
         Hello {name}  a.k.a   {heroName}
         </h1>
         </div>
    )
    }
*/
  //Destructing props method 1  
const Greet = props => {
    const {name,heroName}=props
    return (
    <div>
    <h1>
         Hello {name}  a.k.a   {heroName}
         </h1>
        
         </div>
    )}
export default Greet