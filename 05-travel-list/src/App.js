import { useState } from 'react';
import './App.css';



export default function App(){
const [items,setItems]= useState([]);




function HandelallItems(item){
  setItems((items)=>[...items,item])
  }

function HandelDelete(id){
setItems((items)=> items.filter((item)=>item.id !==id))
}


function HandelToggleItems(id){
  setItems(items=>items.map((item) => item.id === id ? {...item,packed: !item.packed}:item));
}

  
return( <div className='app'>
  <Logo/>
  <Form  onAddItems={HandelallItems}/>
  <PackingList items={items} onDelete={HandelDelete} onToggleItem={HandelToggleItems}/>
  <State items={items}/>
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
function PackingList({items, onDelete,onToggleItem}){
  return (<div className='list'>
    <ul >
{items.map((item)=><Item item={item} onDelete={onDelete} onToggleItem={onToggleItem}  key={item.id}/>)}
  </ul>
  </div>
  );
}
function Item({item,onDelete,onToggleItem}){
    return <li>
      <input type='checkbox' value={item.packed} onChange={()=>onToggleItem(item.id)}/>
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>{item.quantity}{item.description}</span>
      
      <button onClick={()=>onDelete(item.id)}>&times;</button>
    </li>
}
function State({items}){
if (!items.length) return <p className='stats'>
  <em>
    Start adding some items to your packing List 
  </em>
</p>


const numItems=items.length;
const numPacked=items.filter((item)=>item.packed).length
const Percentage= Math.round((numPacked/numItems)*100)


  return <footer className='stats'>
    <em>
      {Percentage ===100 ? "you got everything ! Ready to go ":
      `You have ${numItems} items on your list ,and you already 
      packed ${numPacked} (${Percentage}%)`}</em>
    </footer>
}