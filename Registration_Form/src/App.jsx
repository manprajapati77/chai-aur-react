import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  // For Name 1 - 2
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');


  const handleChange = (e) => {
    setInputValue(e.target.value); // Update state with the new input value
    
    
  };
    
  const valChange = () => {
    setInputValue2(inputValue); 
    setInputValue4(inputValue3); 
    setInputValue6(inputValue5); 
    setInputValue8(inputValue7); 
  }
  
  useEffect(()=>{
    console.log(inputValue2)
}, [inputValue2])


 // For Add 3 - 4
 const [inputValue3, setInputValue3] = useState('');
 const [inputValue4, setInputValue4] = useState('');


 const handleChange3 = (e) => {
   setInputValue3(e.target.value); // Update state with the new input value
   
   };
   

 useEffect(()=>{
    console.log(inputValue4)
    }, [inputValue4])


 // For Mobile No 5 - 6
 const [inputValue5, setInputValue5] = useState('');
 const [inputValue6, setInputValue6] = useState('');


 const handleChange5 = (e) => {
   setInputValue5(e.target.value); // Update state with the new input value
  //  console.log(e.target.value);
   
 };
   

 useEffect(()=>{
   console.log(inputValue6)
}, [inputValue6])


 // For Mobile No 7 - 8
 const [inputValue7, setInputValue7] = useState('');
 const [inputValue8, setInputValue8] = useState('');


 const handleChange7 = (e) => {
   setInputValue7(e.target.value); // Update state with the new input value
  //  console.log(e.target.value);
   
 };
   

 useEffect(()=>{
   console.log(inputValue8)
}, [inputValue8])

  return (
    <div className="bg-slate-800 flex w-full h-screen align-middle justify-center p-6">
      
      <div className="flex w-1/2 bg-lime-200 align-middle  rounded-3xl flex-col flex-wrap">
        
        <h1 className='flex text-5xl font-medium align-middle justify-center text-center text-green-600       p-5'>Form</h1>
        
        <div className='flex m-5 items-center flex-wrap justify-between'>
            

            {/*0*/}
            <h2 className="p-3 text-xl cursor-default">  Name</h2>
            
            <input className='rounded-xl p-2 ring-1 w-52 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-200' 
            type="text"
            placeholder='Enter Name'
            value={inputValue}
            onChange={handleChange}
             />


            {/*3*/}
            <h2 className="p-3 text-xl cursor-default">  Address</h2>
            
            <input className='rounded-xl p-2 ring-1 w-52 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-200' 
            type="text"
            placeholder='Enter Address'
            value={inputValue3}
            onChange={handleChange3}
             />

            {/*5*/}
            <h2 className="p-3 text-xl cursor-default">  Number</h2>
            
            <input className='rounded-xl p-2 ring-1 w-52 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-200' 
            type="Number"
            placeholder='Enter Number'
            value={inputValue5}
            onChange={handleChange5}
             />

            {/*7*/}
            <h2 className="p-3 text-xl cursor-default">  Pin Code</h2>
            
            <input className='rounded-xl p-2 ring-1 w-52 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-200' 
            type="text"
            placeholder='Enter Pin Code'
            value={inputValue7}
            onChange={handleChange7}
             />
           </div>
          <div className='flex justify-center'>
            <button
                onClick={valChange}
                className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 w-24 justify-center'    
            >
              Submit
            </button>
            </div>
      </div>
    </div>
  )
}

export default App
