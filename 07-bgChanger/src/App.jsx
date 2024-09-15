import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor]=useState("olive")
  return (
    <>
   <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className='fixed  flex-wrap flex justify-center mb-4 bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3  rounded-3xl'>
<button className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'style={{backgroundColor:'red'}} onClick={()=> setColor('red')}>Red</button>
<button className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'style={{backgroundColor:'green'}}onClick={()=> setColor('green')}>Green</button>
<button className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'style={{backgroundColor:'yellow'}}onClick={()=> setColor('yellow')}>Yellow</button>
<button className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'style={{backgroundColor:'brown'}}onClick={()=> setColor('brown')}>Brown</button>
<button className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'style={{backgroundColor:'purple'}}onClick={()=> setColor('purple')}>Purple</button>
<button className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'style={{backgroundColor:'hotpink'}}onClick={()=> setColor('hotpink')}>Hotpink</button>
<button className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'style={{backgroundColor:'blue'}}onClick={()=> setColor('blue')}>Blue</button>
<button className='outline-none px-4 py-1 rounded-full  text-white shadow-lg'style={{backgroundColor:'skyblue'}}onClick={()=> setColor('skyblue')}>Skyblue</button>
     
      </div>
    </div>
   </div>
    </>
  )
}

export default App
