import { useState } from 'react'
import './App.css'
import Input from './components/input'
import { InputNames } from './inputNames'

function App() {
  const [tableContent, setTableContent] = useState(InputNames);

  function handleChange(event, index) {

    setTableContent(prevValue => {
      const tempArr = [...prevValue];
      tempArr[index].val = Number(event.target.value);
      return tempArr;
    })

    console.log(tableContent);
  }


  return (
    <>
      <menu className='grid justify-items-center grid-rows-[1fr_2fr_2fr] bg-gradient-to-tr from-gray-900 to-stone-800 w-screen h-screen py-12'>
        <h1 className='inline-block bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-600 drop-shadow-xl font-bold text-5xl text-transparent bg-clip-text'>
          Investment Calculator
        </h1>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 place-items-center py-6 w-[46vw] bg-gradient-to-tr  to-gray-900 from-neutral-950
        shadow-xl h-[40vh]  rounded-xl border-b-neutral-500 border-r-neutral-500'>
          {tableContent.map((el, index) => {
            return <Input key={index} header={el.name} func={ () => handleChange(event, index) } />
            })}
        </div>
      </menu>
    </>
  )
}

export default App
