import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'



function ThreadLine(day: number) {
  const date = new Date();
  
  return (
    <>
      <div className="threadLine"></div>
      
    </>
  )
}

function App() {

  let elements = []
  for(let i = 1; i < 25; ++i) {
    elements.push(Card(i, "A poem"))
    elements.push(ThreadLine(i))
    
  }
  return (
    <>
      {elements}
    </>
  )
}

export default App
