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
function HandelItemClear(){
  const confirmed= window.confirm("Are you sure you want to delete all items ?")
   if (confirmed) setItems([]);
}
  
return( <div className='app'>
  <Logo/>
  <Form  onAddItems={HandelallItems}/>
  <PackingList items={items} onDelete={HandelDelete}
   onToggleItem={HandelToggleItems} onItemClear={HandelItemClear}/>
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
function PackingList({items, onDelete,onToggleItem,onItemClear}){
  const [shortby,setShortby]= useState("input");
  let shortedItems;
  if (shortby ==="input") shortedItems =items;
if (shortby === "description") shortedItems =items.slice().sort((a,b)=>a.description.localeCompare(b.description));
if (shortby === "packed") shortedItems = items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
  return (<div className='list'>
    <ul >
        {shortedItems.map((item)=><Item item={item}
        onDelete={onDelete} onToggleItem={onToggleItem}
          key={item.id}/>)}
      </ul>
      <div className='actions'>
        <select value={shortby} onChange={(e)=>setShortby(e.target.value)}>
    <option value="input">
      Short by input order
    </option>
    <option value="description">
      Short by description
    </option>
    <option value="packed">
      Short by packed
    </option>
        </select>
      </div>
      <button onClick={onItemClear} className='btn-clear'>Clear list</button>
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