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
const [curOpen,setCurOpen]=useState(null)

  return <div className="accordion" >
    {data.map((el,i) =>
    <AccordionItem curOpen={curOpen} 
    onOpen={setCurOpen} 
    title={el.title} 
    text={el.text} 
    num={i}
    key={el.title}>
    {el.text}
    </AccordionItem> )}
    <AccordionItem curOpen={curOpen} 
    onOpen={setCurOpen} 
    title="Test 1"
    num={22}
    key="test 1">
    <p> Allow react devlopers to : </p>
      <ul>
        <li>Break up UI  into component</li>
        <li>Make component reusuable</li>
        <li>  Please state efficient </li>
      </ul>
  
    </AccordionItem>
  </div>
}
function AccordionItem({num,title,curOpen,onOpen,children}){

  const isOpen = num===curOpen
  function handleToggle(){
    // setOpen((open)=>!open)
    onOpen(isOpen ? null : num)
  }
  return <div className={`item ${isOpen ? "open" :""}`} onClick={handleToggle}>
<p className="Number">{num <9 ? `0 ${num+1}`:num+1}</p>
<p className="Title">{title}</p>
<p className="icon">{isOpen ? "-":"+"}</p>

{isOpen && <p className="content-box">{children}</p>}

  </div>
}



// const CreditCardInput = () => {
//   const [cardNumber, setCardNumber] = useState('');

//   // Function to format the credit card number
//   const handleCardNumberChange = (event) => {
//     let input = event.target.value;

//     // Remove non-numeric characters from input
//     input = input.replace(/\D/g, '');

//     // Format the input with spaces after every 4 digits
//     let formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();

//     // Update state with formatted input
//     setCardNumber(formattedInput);
//   };

//   return (
//     <div>
//       <label htmlFor="cardNumber">Credit Card Number:</label>
//       <input
//         type="text"
//         id="cardNumber"
//         name="cardNumber"
//         value={cardNumber}
//         onChange={handleCardNumberChange}
//         placeholder="Enter your credit card number"
//         maxLength="19" // Limit input length to 19 characters (including spaces)
//       />
//     </div>
//   );
// };

// export default CreditCardInput;
