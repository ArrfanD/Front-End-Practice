import React from 'react'

function Main({setSection}) {
  return (
    <div onClick={()=> setSection("main")}>Main</div>
  )
}

export default Main