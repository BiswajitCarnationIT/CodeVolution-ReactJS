

import React from 'react'

function ChildComponent(props) {   // pass props asa parameter
    return (
        <div>
             {/*
            <button onClick = {props.greetHandler}>Greet Parent from child component</button>
            */}
            <button onClick = {() => props.greetHandler('Child')}>Greet Parent from child component</button>

        </div>
    )
}

export default ChildComponent;