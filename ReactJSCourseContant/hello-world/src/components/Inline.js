import React from 'react'

function Inline() {
    const heading ={
        fontSize:'72px',
        color:'blue'
    }
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}
// inline are not specified as string they are specified as object
// whoes key is camel  case version of styling  and value is usually a string 
export default Inline
