

import React from 'react'

function ChildComponent(props) {   // taking props as a parameter
    return (
        <div>
            <button onClick = {props.greetHandler}>Greet Parent from child component</button>
        </div>
    )
}

export default ChildComponent;
