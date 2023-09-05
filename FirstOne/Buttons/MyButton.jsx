import React from 'react'

const MyButton = (props) => {
  return (
    
    <div>MyButton
    {/* here onpress is an attribute in Events.jsx */}
        <button onClick={()=>props.onPress("this msg is under my button")}>click me</button>
    </div>
  )
}

export default MyButton
