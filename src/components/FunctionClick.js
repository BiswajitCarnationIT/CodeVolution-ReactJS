
/* ---- Event handler ---- */

import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked')
    }

    return (
        <div>
            <button onClick = {clickHandler}>Click me @functionalClick</button> 
        </div>                                              
    )
}

export default FunctionClick


/*
//clickHandler is function
//clickHandler() is function call
*/