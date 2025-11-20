import { useState } from 'react'

import './Card.css'


function Card(num: number, text: string) {
  const date = new Date();
  let dev = true;
  const canBeOpened = dev || (date.getMonth() == 12 && date.getDay() >= num)
  return (
    <>
      <div className="card">
        <h2>Card {num}</h2>
        <div>{canBeOpened ? text : "Nope"}</div>
      </div>
      
    </>
  )
}

export default Card
