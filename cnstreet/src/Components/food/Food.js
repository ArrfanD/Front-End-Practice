import React from 'react'

function Food({setFood}) {
  return (
    <div onClick={()=> setFood(true)}>Food</div>
  )
}

export default Food;