function customRender(reactElement_a, mainContainer_a){
    // const domElement = document.createElement(reactElement_a.type)
    // domElement.setAttribute("href", reactElement_a.props.href)
    // domElement.setAttribute("target", reactElement.props.target)
    // domElement.innerHTML = reactElement.children

    // mainContainer.appendChild(domElement)

    const domElement = document.createElement(reactElement_a.type)
    domElement.innerHTML = reactElement_a.children
    for(const prop in reactElement_a.props){
        domElement.setAttribute(prop, reactElement_a.props[prop])
        
    }
    
    mainContainer_a.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)