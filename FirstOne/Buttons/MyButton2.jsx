import React from 'react'


const MyButton2 = (props) => {
  return (
    <div>
          <button onClick={()=>props.onPress("this msg is using component my button")}>click me</button>
    </div>
  )
}

export default MyButton2
