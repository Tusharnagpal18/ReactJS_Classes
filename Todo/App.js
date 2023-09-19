
import React from "react";
import "./WatchPage/style.css";
// import Mytodo from "./Todo/Mytodo";
import Home from "./WatchPage/Home";
const App = () => {
  return (
    <>
      <body>
        {/* <Mytodo /> */}
        <Home />

        {/* <h1 className='heading_style'>Top 5 Netflix Series</h1> */}
        {/* {MyData.map((val,index)=>(
      <MyCard
        key={index}
        title={val.title}
        seriesName={val.seriesName}
        link={val.link}
        img={val.imgsrc} 
         />     
     ))} */}
      </body>
    </>
  );
};

export default App;
