import React from 'react'

/*
function Greet(){
    return <h1>Hello Biswas</h1>
}
*/

//export const Greet = () => <h1>functional component Arrow from Greet.js</h1>  // named export

export const Greet = (props) => {
    console.log(props)
return <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
}


// export default Greet; //default allow us to import Greet with any name