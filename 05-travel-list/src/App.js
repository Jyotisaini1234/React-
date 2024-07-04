import './App.css';
export default function App(){
  return( <div className='app'>
  <Logo/>
  <Form/>
  <PackingList/>
  <State/>
  </div>)}

   function Logo(){
    return <div>
    
      <h1 className="h1">  <div className="logo"></div> win + Far Away</h1>
      
    </div>
   }
function Form(){
  return <div className='add-form'>
<h3>What do you need for your Trip</h3>
  </div>

}
function PackingList(){
  return <div className='list'>
List
  </div>
}
function State(){
  return <footer className='stats'><em>You have X items on your list ,and you already packed X (X%)</em></footer>
}