import { useState } from 'react';
import './App.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 4, description: "Phone", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },


];

export default function App(){
const [items,setItems]= useState([]);
function HandelallItems(item){
  setItems((items)=>[...items,item])
  }
  return( <div className='app'>
  <Logo/>
  <Form  onAddItems={HandelallItems}/>
  <PackingList items={items}/>
  <State/>
  </div>)}

   function Logo(){
    return <div>
    
      <h1 className="h1">  <div className="logo"></div> win + Far Away</h1>
      
    </div>
   }
function Form({onAddItems}){
const [description,setDescription]= useState("");
const [quantity,setQuantity] = useState(1);

function HandelSubmit(e){
  e.preventDefault(); 

  if(!description) return;
const newItem = {description,quantity,packed:false,id:Date.now()}
onAddItems(newItem)
console.log(newItem)
setDescription("");
setQuantity(1);
  

} 

  return <div className='add-form' onSubmit={HandelSubmit}>
         <h3>What do you need for your Trip</h3>
         <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>{Array.from({length:20},(_,i)=>i+1).map((num)=>(<option value={num} key={num}>{num}</option>))}</select>
         <input type='text' placeholder='Item...' value={description} onChange={(e)=>setDescription(e.target.value)}/>
         <button onClick={HandelSubmit}>Add</button>
  </div>

}
function PackingList({items}){
  return (<div className='list'>
    <ul >
{items.map((item)=><Item item={item} key={item.id}/>)}
  </ul>
  </div>
  );
}
function Item({item}){
    return <li><span style={item.packed ? {textDecoration:"line-through"} : {}}>{item.quantity}{item.description}</span>
    <button>&times;</button>
    </li>
}
function State(){
  return <footer className='stats'><em>You have X items on your list ,and you already packed X (X%)</em></footer>
}