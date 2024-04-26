import React from "react";
// import React-DOM from 'react-dom'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App(){
  return <>
  <Step/>
  <Step/>
  </>
}

function Step() {
  const [step, setStep] = React.useState(1);
  const [isOpen, setOpen] = React.useState(true);
  function handleNext() {
    step < 3 ? setStep((step) => step + 1) : setStep((step) => step);
  }
  function handlePrevious() {
    step > 1 ? setStep((step) => step - 1) : setStep((step) => step);
  }
  return (
    <div>
      <button className="close" onClick={() => setOpen((isopens)=>!isOpen)}>❌</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
