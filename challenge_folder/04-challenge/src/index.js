import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="container">
     <TipCalculator/>
     
    </div>
  );
}


function TipCalculator(){
  const [Bill,setBill]=useState("")
  const [percentage1,setPercentage1]=useState(0)
  const [percentage2,setPercentage2]=useState(0)
const Tip = Bill*((percentage1+percentage2)/2/100);
function handelReset(){
  setBill("");
  setPercentage1(0);
  setPercentage2(0);
}

  return (
    <div>
       <BillInput Bill={Bill}
       onSetBill={setBill}
       />
     <SelectPercentage percentage={percentage1} onSelect={setPercentage1} >How did you like the services ?</SelectPercentage>
     <SelectPercentage percentage={percentage2} onSelect={setPercentage2} >How did your Friends like the services ?</SelectPercentage>
     {Bill > 0 && <>
      <Output  Bill={Bill} Tip={Tip}/>
      <Reset onReset={handelReset} />
     </>}
    </div>
  )
}


function BillInput({Bill,onSetBill}){
  return (
    <div>
      <label>How much was the Bill</label>
      <input type="text" placeholder="Bill value" value={Bill} onChange={(e)=>onSetBill(Number(e.target.value))}/>
    </div>
  )

}
function SelectPercentage({children,percentage,onSelect}){
  return (
    <div>
      <label>{children}</label>
      <select value={percentage}
      onChange={(e)=>onSelect(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>absolutely amazing (20%)</option>

      </select>
    </div>
  )

}
function Output({Bill,Tip}){
  return <h1>You pay X ({Bill} +{Tip} Tip)</h1>
}
function Reset({onReset}){
  return <button onClick={onReset} >Reset</button>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
