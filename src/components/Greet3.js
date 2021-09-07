

import React from 'react'



/*
export const Greet = (props) => {      
    console.log(props)
return(
    <div> 
     <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
     {props.children}

    </div>
    
)
}
*/

/*------  Extracting name and heroName from props------   */

/*export const Greet = ({name,heroName}) => {  //say 1- Destructuring in parameter
return(
    <div> 
     <h1>Hello {name} a.k.a. {heroName}</h1>

    </div>
    
)
}*/

/*------  Extracting name and heroName from props------   */

export const Greet = (props) => {  
    const {name,heroName} = props //say 2- Destructuring in function body
    return(
        <div> 
         <h1>Hello {name} a.k.a. {heroName}</h1>
    
        </div>
        
    )
    }

export default Greet;

