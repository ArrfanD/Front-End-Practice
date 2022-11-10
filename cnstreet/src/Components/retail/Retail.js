import React from 'react'

function Retail({setRetail}) {
  return (
    <div onClick={()=> setRetail(true)}>Retail</div>
  )
}

export default Retail