import React from 'react'

function Community({setSection}) {
  return (
    <div onClick={()=> setSection("community")}>Community</div>
  )
}

export default Community