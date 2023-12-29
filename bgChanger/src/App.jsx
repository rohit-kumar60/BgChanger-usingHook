import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div class="container" style={{backgroundColor:color}}>
      <h1>Background Changer</h1>
      <div class="cont1">
        <button id='red' onClick={() =>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
        <button id='green' onClick={() =>setColor("green")}  style={{backgroundColor:"green"}}>Green</button>
        <button id='yellow' onClick={() =>setColor("yellow")}  style={{backgroundColor:"yellow"}}>Yellow</button>
      </div>
    </div>
  )
}

export default App
