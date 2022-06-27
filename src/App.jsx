import { useState } from 'react'
import './App.css'
import LorenIpsum from './LorenIpsum/index'
import dataText from './data'

function App() {
  const [textCounter, setTextCounter] = useState(0)
  const [data, setDate] = useState(dataText)
  const test = () =>{
    const inputValue = document.querySelector(".lorem-input").value
    setTextCounter(inputValue)
  }
  return (
    <>
      <h1 className="title"> tired of boring lorem ipsum?</h1>
      <div className="generate-wrapper">
          <span className="generate-paragraph">paragraph:</span>
          <input className="lorem-input" type="number"></input>
          <button className="lorem-btn" onClick={test} >generate</button>
      </div>
      
      <LorenIpsum data={data} textCounter={textCounter}/>
    </>
  )
      
  
}

export default App
