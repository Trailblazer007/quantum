"use client"
import React from 'react'
import { useState } from 'react'


const CountdownText = ({number}) => {
  // const [number, setNumber] = useState('1');
  return (
    <div className='border-[0.5px] border-[#21859B] bg-[#82828229] w-max px-2 py-3 rounded-2xl mb-4'>
      <p>Phase 1{number} Countdown</p>
    </div>
  )
}

export default CountdownText