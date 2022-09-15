import React from 'react'
import Person from './Person'
function NameList() {
  /*   const names = ['bruce', 'Diana', 'Wonderwoman']
    const nameList =  names.map(name => <h2>{name}</h2>)
 */

/*     const persons =[
{
    id : 1,
    name:'Bruce',
    age:30,
    skill:'React'
},
{
    id: 2,
    name: 'Diana',
    age: 25,
    skill: 'Angular'
},  
{
    id: 3,
    name:'Clerk',
    age:28,
    skill:'Vue'
}

]

// key PROPS SHOULD BE UNIQUE IT COULD BE 
//ANYTHING. IT COULD NOT BE ACCESSABLE IN THE CHILD PROPS
// 
const personList = persons.map(person => 
<Person key={person.name} person={person} />)
    return <div>{personList}</div>
 */
   

     {/*  <div> <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2></div> */}
      const names = ['bruce', 'Clark', 'Diana', 'bruce']
      const  nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div>
}
// LIST COMPONENT ONLY RESPONSIBLE 
//FOR RENDERING THE LIST AND PERSONAL COMPONENT 
//IS ONLY REPONSIBLE FOR PERSON'S HTML
export default NameList
