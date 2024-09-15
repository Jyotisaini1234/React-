import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [ length,setLenght]= useState("8")
const [numberAllow,setNumberAllow]= useState("false")
const [charAllow,setCharAllow]=useState("false")
const [password,setPassword]= useState("")
const passwordRef= useRef(null)
const passwordGenerator = useCallback(()=> {
  let pass =""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllow) str+="0123456789"
  if(charAllow) str+="@#$%&+={}[]()~`!"
for(let i=1;i<=length;i++){
  let char = Math.floor(Math.random()*str.length+1)
pass +=str.charAt(char)
}
setPassword(pass)

},[length,numberAllow,charAllow,setPassword])

const copyPasswordToClipBoard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
},[password])


useEffect(()=>{
  passwordGenerator()
},[length,numberAllow,charAllow,passwordGenerator])

// passwordGenerator()

  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md p-2
rounded-lg px-4 my-8 text-yellow-500  text-red bg-gray-700'>
  <h1 className='text-white text-center'>password Generator</h1>
  <div className='flex shadwo rounded-lg overflow-hidden mb-4'>
    <input type='text' value={password}  className='outline-none w-full py-1 px-3' readOnly placeholder='password' ref={passwordRef}/>
  <button className='outline-none bg-purple-400 text-white px-3 py-0.5 shrink-0'onClick={copyPasswordToClipBoard}>Copy</button>
  </div>
  <div className='flex text-sm gap-x-4'>
    <div className='flex  items-center'>
    <input  type='range' min={6} max={100} value={length} className='cursor-pointer gap-3' onChange={(e)=> {setLenght(e.target.value)}}/>
    <label>length:{length}</label>
    </div>
    <div className='flex  items-center '>
    <input  type='checkbox' defaultChecked={numberAllow} id='numberInput'  onChange={()=> {setNumberAllow((prev)=>!prev)}}/>
    <label htmlFor='numberInput'>Number</label>
    </div>
    <div className='flex  items-center '>
    <input  type='checkbox' defaultChecked={charAllow} id='charInput'  onChange={()=> {setCharAllow((prev)=>!prev)}}/>
    <label htmlFor='charInput'>Characters</label>
    </div>
    </div> 
</div>
    </>
  )
}

export default App
