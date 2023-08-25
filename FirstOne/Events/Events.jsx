import React from 'react'
import MyButton from './MyButton';

const Events = () => {
    const displayMsg=(msg)=>{
        // alert("Button has been clicked")
        alert(msg);
    };
  return (
    <div>Events
    <h2>Event handling events</h2>
    {/* never call the function with () as it has to be acted like an event */}
    {/* <button onClick={displayMsg}>Click Me</button> */}
          {/* another way to display msg */}
    {/* <button onClick={(()=>displayMsg("this is my button"))}>click me</button> */}
    <MyButton onPress={displayMsg}/>
    </div>
  )
};

export default Events