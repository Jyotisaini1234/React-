import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
     
     <h1 className="text-3xl font-bold underline bg-green-400 text-white p-4 rounded-xl mb-4">
      Hello world!
    </h1>
   
  <Card username="Jyoti Saini" btnText="click me"/>
  <Card username="Sanjana" btnText="click me"/>
  

    </>
  )
}

export default App
