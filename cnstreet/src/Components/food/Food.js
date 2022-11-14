import React from 'react'

function Food({setSection}) {
  return (
    <div onClick={()=> setSection("food")}>Food</div>
  )
}

export default Food;