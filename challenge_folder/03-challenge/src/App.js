import {useState} from "react"
import './App.css';

let list = [
  {
    title: "First Day",
    text: "The weather was sunny and warm.The weather was sunny and warm."
  },
  {
    title: "Second Day",
    text: "It rained heavily in the afternoon.It rained heavily in the afternoon."
  },
  {
    title: "Third Day",
    text: "Cloudy skies with a cool breeze.Cloudy skies with a cool breeze."
  },
  {
    title: "Fourth Day",
    text: "A mix of sun and clouds, mild temperatures.A mix of sun and clouds, mild temperatures."
  },
  {
    title: "Fifth Day",
    text: "Sunny and hot, perfect for the beach.Sunny and hot, perfect for the beach."
  },
  {
    title: "Sixth Day",
    text: "Overcast with occasional showers.Overcast with occasional showers."
  },
  {
    title: "Seventh Day",
    text: "Sunny with clear skies throughout the day.Sunny with clear skies throughout the day."
  }
];





export default function App() {
  return <div>
    <Accordion data={list}/>
  </div>
}

function Accordion({data}){
  return <div className="accordion" >
    {data.map((el,i) =><AccordionItem title={el.title} text={el.text} num={i}/>)}
  </div>
}
function AccordionItem({num,title,text}){
  const [isOpen,setOpen]= useState(false)
  function handleToggle(){
    setOpen((open)=>!open)
  }
  return <div className={`item ${isOpen ? "open" :""}`} onClick={handleToggle}>
<p className="Number">{num <9 ? `0 ${num+1}`:num+1}</p>
<p className="Title">{title}</p>
<p className="icon">{isOpen ? "-":"+"}</p>

{isOpen && <p className="content-box">{text}</p>}

  </div>
}