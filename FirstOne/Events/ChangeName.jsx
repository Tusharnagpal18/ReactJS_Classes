import React, { useState } from 'react'
import MyButton2 from './MyButton2';


const ChangeName = () => {
    // let name1='ABC';
    const[name,setName]=useState('ABC');
    const changeName=()=>{
        // variable,function
        // name.replace('Tushar Nagpal');
        // name.toLowerCase();
        setName('Tushar Nagpal')
        // name='Tushar';
        // console.log(name);
        // alert('this is an alert');
    }
  return (
    <div className='container'>
    <h2>Your name is {name}</h2>

    <button className="btn btn-danger" onClick={changeName}>ChangeName</button>
    {/* <MyButton2 onPress={MyButton2}></MyButton2> */}
    {/* <button onClick={()=>}</button> */}
    </div>
  )
}

export default ChangeName
