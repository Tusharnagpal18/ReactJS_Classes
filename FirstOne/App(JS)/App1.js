// import './App.css';
// import Example1 from './Components/Example1';
import Example1,{ Example2, Example3 } from './Components/Example1';
import Listing from './Components/Listing';
import Message from './Components/Message';
function App1() {
  let lang='React Js',course='MCA';
  let info3=['Node JS','MongoDB','Express JS'];
  let info=[
    {lang:'React Js', lab:'MCA'},
    {lang:'Node Js', lab:'B-Tech1'},
    {lang:'Mongo  dB', lab:'BTech-2'},
  ]
  return (
    <div className="App">
      {/* <Example1/>
      <Example2/> <Example3/> */}
      {/* <Message lang={lang} course={course}/> */}
      {/* <Listing/> */}
      {/* <Message info={info3[0]}/>
      <Message info={info3[1]}/>
      <Message info={info3[2]}/> */}
      {info.map((val)=>(
         <Message info={val}/>
      ))}
    </div>
  );
}

export default App1;
