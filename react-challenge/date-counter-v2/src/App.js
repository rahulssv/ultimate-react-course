import React from "react";

export default function App() {
  const [step, setStep] = React.useState(1);
  const [count, setCount] = React.useState(0);
  const date = new Date();
  date.setDate(date.getDate()+count);

  console.log(date)
  function incrementStep(){
    setStep((s)=>s+1)
  }
  function incrementCount(){
    setCount((c)=>c+step)
    
  }
  function decrementStep(){
    setStep((s)=>s-1)
  }
  function decrementCount(){
    setCount((c)=>c-step)
  }
  
  function handleRange(s){
    setStep(s)
  }

  function handleCount(c){
    setCount(c)
  }
  function handleReset(r){
    setCount(r)
    setStep(r+1)
  }
  return (
    <div className="App">
      <input type="range" min="0" max="10" onChange={(e)=>handleRange(e.target.value)} value={step}/>
      {/* <div>
        <button onClick={decrementStep}> - </button>
        <span>Step: {step}</span>
        <button onClick={incrementStep}> + </button>
      </div> */}
      <div>
        <button onClick={decrementCount}> - </button>
        <input onChange={(e)=>handleCount(e.target.value)} value={count}/>
        {/* <span>Count: {count} </span> */}
        <button onClick={incrementCount}> + </button>
      </div>
      {count>0?<p>{count} days from today is {date.toDateString()} </p>:count<0?<p>{count*-1} days ago from today was {date.toDateString()} </p> :<p>Today is {date.toDateString()} </p>}
      {
        count!==0? <button onClick={()=>handleReset(0)}>Reset</button>:<></>
      }
    </div>
  );
}
