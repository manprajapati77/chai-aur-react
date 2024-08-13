import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componant/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    userName: "Man",
    surname: "Prajapati"
  }

  let arr = [1, "man", 2]

  return (
    <> {/*<></> ise Fragment bolte he*/}
    {/*sath hi har element closing tag hona chahiye nahi he to use <br /> is type se likh sakte he isme last me / add kar diya he */}
   <h1 className='bg-green-400 text-black p-4 rounded-xl'>Check Tailwind CSS</h1>

{/* Card ke ander 2 item (object ya array) use ho rhe he isliye ise variable me hold karke object ko show karna pad raha he aur isi tarah hum array bhi pass kar sakte he */}
    {/* <Card chennal = "Manprajapati" objContainer = {obj}/> */}

    <Card username = "Manprajapati" btntext = "Click me" objContainer = {arr}/>
    <Card username = "SecondName"  objContainer = {arr}/>

    </>
  )
}

export default App
