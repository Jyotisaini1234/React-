const messages=[
  "Learn React",
  "Apply for job",
  "Invest your money "
]

export default function App(){

  function handlPrevious(){
    alert("Previous")
  }
  function handlNext(){
    alert("Next")
  }

  const Step = 1;
  return <div className="steps">
    <div className="numbers">
      <div className={`${Step >= 1 ? "active" :""}`}>1</div>
      <div className={`${Step >= 2 ? "active" :""}`}>2</div>
      <div className={`${Step >= 3 ? "active" :""}`}>3</div>

    </div>
    <p className="message">Step :{Step}: {messages[Step-1]}</p>
    <div className="buttons">
      <button style={{backgroundColor:"#7950f2",color:"#fff"}} onClick={handlPrevious}>Previous</button>
      <button style={{backgroundColor:"#7950f2",color:"#fff"}} onClick={handlNext}>Next</button>
    </div>
  </div>
}