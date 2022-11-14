import React from 'react'

function Retail({setSection}) {
  return (
    <div onClick={()=> setSection("retail")}>Retail</div>
  )
}

export default Retail