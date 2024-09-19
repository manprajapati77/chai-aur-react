import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState(0)
  const cache = useCallback(()=>{

  })
  return (
    <>
      <div className="bg-slate-800 w-1/2 h-80 flex my-10 m-auto rounded-lg justify-center 
      items-center flex-col">
      <h2 className='text-4xl font-bold text-white m-2'>Password Generator</h2>

      <input
        type="text"
        placeholder='Password' 
        className='p-1'
        value={password}

      />
      <input type="range" min={6} max={20}/>

      </div>
    </>
  )
}

export default App
