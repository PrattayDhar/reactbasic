import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const num=1616;
const singer ={name:'Hasan' ,Job:'singer'}
const singerstyle={
  color:'red'
}

function App() {
  const array=['prattay','mehadi']
  return (
    <div className="App">
      {/* <Createtion></Createtion>
      <Createtion></Createtion> */}
      {/* {
        array.map(rtarry=><li>name:{rtarry} </li>)
      }
      <Perameter name={array[0]} job="senti"></Perameter>
      <Perameter name="shith" job="senti"></Perameter>
      <Perameter name="Mim" job="Vallgena"></Perameter>
      <Perameter name="Hasan" job="Ghum"></Perameter> */}

     {/* <Counter></Counter> */}
     <Extranalusers></Extranalusers>
    </div>
  );
}

// function Createtion(){
//   return (
//   <div className="creation">
//       <h1>Hasan Ekata ...</h1>
//       <h1>Hasan Vala...</h1>

//     </div>
  
  
  
//   )
// }
// function Perameter(props){
//   return (
//   <div className="creation">
//       <h1>{props.name}</h1>
//       <h1>{props.job}</h1>

//     </div>
  
  
  
//   )
// }
// function Counter(){
//   const [count,setCount]=useState(22);
//   // console.log(abc);
//   // const increchCount= () =>{
//   //   const newcount=count+1;
//   //   setCount(newcount);
//   // }
//   const increchCount= () =>setCount(count + 1);
 
//   return(
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increchCount}>Increce</button>
//     </div>
//   )
// }
function Extranalusers(){
  const [users,stateuser]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>stateuser(data))
  },[])
  return(
    <div>
      <h2>API</h2>
      {
        // users.map(user=><li>{user.name}</li>)
        users.map(user=><user name={user.name}></user>)
      }
    </div>
  )
}
function user(props){
  return(
    <div>
      <h3>Name: {props.name}</h3>
    </div>
  )
}
export default App;
