

function App() {
   {/*React ke ander function ke ander return karne per agar hum direct html me code likhna chahte he to hum ek hi tag ke ander code likh sakte he isliye <></> ye react ne hume diya taki hum iske ander code likh sake*/}
   const username = "My name is man"
   return (
    <>
    {/* {} iske ander variable ko likha ja sakta he lekin us per koi method ya itiration perform nahi kar sakte iske liye ise function ke ander ya function ke bahar apply karna hoga tag ke ander nahi kar sakte */}
   <h1>Chai aur React with Viet {username}</h1>
   <p>we can't return more than 1 element in jsx when we wrap element in empty tag this is called fragment</p>
   </>
  )
}

export default App
