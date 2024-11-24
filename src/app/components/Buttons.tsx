'use client'
import React from 'react'
import { useState } from 'react'

const Buttons = () => {
 const [counter, setCounter] = useState(0);
 const handleIncrement = () => {
  setCounter(counter+1)
   console.log('added value ==>', counter)
  }
  const handledecrement = () => {
    setCounter(counter-1)
     console.log('added value ==>', counter)
    }
    const handleReset = () => {
        setCounter(0)
         console.log('added value ==>', counter)
        }
  

    return (
    <div className='flex flex-col justify-center items-center bg-slate-300 w-screen h-screen p-5'>
        <h1 className='text-4xl font-bold text-red-900 m-4 underline bg-green-500 p-4 rounded'>usestate </h1>
       <p className='text-3xl m-4'>{counter}</p>
        <button className='bg-blue-700 rounded p-4 text-white m-2 w-96' onClick={handleIncrement}>Increment</button>
        <button className='bg-green-500 text-white p-4 rounded m-2 w-96' onClick={handledecrement}>Decrement</button>
        <button className='bg-yellow-800 text-white p-4 rounded m-2 w-96' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Buttons