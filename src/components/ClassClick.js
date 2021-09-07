
/* ---- Event Handling in Class component ---- */

import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("Clicked the button using class event")
    }

    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>Click me @class</button>
            </div>
        )
    }
}

export default ClassClick
