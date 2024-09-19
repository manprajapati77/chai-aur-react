import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("black")

  return (
    <div className='flex justify-center items-end  w-full h-screen'  style={{ backgroundColor: color }} >
      <div className='flex flex-nowrap w-1/2 p-1 my-5 border-solid border-2 border-white-500 h-10 justify-center rounded-xl'>

      <div className='flex justify-center cursor-pointer text-white  w-20 rounded-xl border-2 border-solid divide-white' style={{backgroundColor: "red"}} onClick={()=> setcolor("red")} >
    Red
      </div>
      <div className='flex justify-center cursor-pointer text-white  w-20 rounded-xl border-2 border-solid divide-white' style={{backgroundColor: "blue"}} onClick={()=> setcolor("blue")} >
    Red
      </div>
      <div className='flex justify-center cursor-pointer text-white  w-20 rounded-xl border-2 border-solid divide-white' style={{backgroundColor: "pink"}} onClick={()=> setcolor("pink")} >
    Red
      </div>
      <div className='flex justify-center cursor-pointer text-white  w-20 rounded-xl border-2 border-solid divide-white' style={{backgroundColor: "brown"}} onClick={()=> setcolor("brown")} >
    Red
      </div>
      <div className='flex justify-center cursor-pointer text-white  w-20 rounded-xl border-2 border-solid divide-white' style={{backgroundColor: "green"}} onClick={()=> setcolor("green")} >
    Red
      </div>

      </div>
    </div>
  )
}

export default App
