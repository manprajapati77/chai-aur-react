import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //userState ke ander koi bhi value ko hold kar sakte he true numerical function string etc. vo ek default value he
  //iske ander first chiz jo counter aur dusra method jise setCounter se denote kar rhe he hum use kuch bhi naam diya ja sakta he 
  //counter ek variable ki tarah kaam kar raha he
  //setCounter ek method ki tarah kaam kar rha he

  let [counter, setCounter] = useState(15)
  //let count = 15



  let increaseCount = () => {
    if (20 > counter) {
      counter = ++counter;
      setCounter(counter)
      console.log(counter)
    }
    else {
      alert('Enter a Value equal or less than 20')
    }
  }

  let decreaseCount = () => {
    if (0 < counter) {
      counter = --counter;
      setCounter(counter)
      console.log(counter)
    }

    else {
      alert('Enter a Value more than or equal to 0')
    }
  }

  // const [count, setCount] = useState(0)

  return (
    <>
      <h1> Chai aur React </h1>
      <h2> Counter Value {counter} </h2>

      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App
