import  { useState } from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
     <Counter />
    </div>
  );
}

function  Counter(){
  
  const [count,setCount]=useState(0);
  const [step,setStep]=useState(1);
  const date =new Date("4 June 2024");
  date.setDate(date.getDate()+count);

  return <div>
     <div>
      
      <button className='btn' onClick={()=> setStep((c)=>c-1)}>-</button>
      <span> Step :{step}</span>
      <button className='btn' onClick={()=> setStep((c)=>c+1)}>+</button>
    </div>
    <div>
      
      <button className='btn' onClick={()=> setCount((c)=>c-step)}>-</button>
      <span>Count :{count}</span>
      <button className='btn' onClick={()=> setCount((c)=>c+step)}>+</button>
    </div>
   
    <p className='pa'> 
      <span>{count === 0 ? "Today is " : count > 0 ?`${Math.abs(count)} day from today is ` : `${count} days ago was`}</span>
      <span>{date.toDateString()}</span>
    </p>
  </div>
}
export default App;
