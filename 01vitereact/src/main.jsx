import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h1>
        my name is man </h1>
    )
}

const anotherUserName = "Chai aur Code"

//yah humne custom syntax banaya tha js me jo yaha per exicute karne ka try kiya lekin react ke kuch rules constant he unhe breck nahi kar sakte he 
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit google"
// }

// const anotherElement = (
//     <a href="http://google.com" target='_blank'>Visit Google</a>
// )



//react is hi type ke syntex ko allow karta he
// const reactElement = React.createElement(
//     'a',
//     {href: "https://google.com", target: '_blank'},
//     'Click with reactElement',
//anotherUserName
// )
ReactDOM.createRoot(document.getElementById('root')).
render(
    
    // <MyApp />
    // <ReactElement />
    // anotherElement
    // reactElement
    <App />

)
