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
  
  
  return (
    <div className="App">
      <div>
        <button onClick={decrementStep}> - </button>
        <span>Step: {step}</span>
        <button onClick={incrementStep}> + </button>
      </div>
      <div>
        <button onClick={decrementCount}> - </button>
        <span>Count: {count} </span>
        <button onClick={incrementCount}> + </button>
      </div>
      {count>0?<p>{count} days from today is {date.toDateString()} </p>:count<0?<p>{count*-1} days ago from today was {date.toDateString()} </p>:<p>Today is {date.toDateString()} </p>}
    </div>
  );
}
