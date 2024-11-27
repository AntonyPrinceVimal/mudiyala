import { useState } from 'react'
import './App.css'

function App() {
  const [col, setCol] = useState("#000000");

  function change(event: React.ChangeEvent<HTMLInputElement>){
    setCol(event.target.value);
  }

  return (
    <div>
      <h1 className="topic">Color Code Finder</h1>
      <div className="square" style={{background:col}}></div>
      <h1 className="text" >Selected Color : {col}</h1>
      <input className="form" type="color" value={col} onChange={change}/>
    </div>
  )
}

export default App
