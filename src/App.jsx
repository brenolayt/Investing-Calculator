import { useState } from 'react'
import './App.css'
import Input from './components/input'

function App() {

  return (
    <>
      <menu className='grid place-items-center grid-rows-3 bg-gradient-to-tr from-gray-900 to-stone-800 w-screen h-screen'>
        <h1 className='inline-block bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-600 drop-shadow-2xl font-bold text-5xl text-transparent bg-clip-text'>
          Investment Calculator
        </h1>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 place-items-center py-6 w-[48vw] shadow-xl h-[36vh] border-2 rounded-xl border-b-neutral-500 border-r-neutral-500'>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
        </div>
      </menu>
    </>
  )
}

export default App
