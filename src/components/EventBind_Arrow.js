
/* -----Binding event handler using Arrow function --- */

import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
    }

    
    clickHandler(){
        this.setState({     // this within clickHandler is undefined rel JS
            message: 'Good Bye'  //Throws error without binding
        })
        console.log(this)
    }

    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick = {this.clickHandler}>Click</button>  //Throws error  */}
                {/*<button onClick = {this.clickHandler.bind(this)}>Click</button> */}
                
                {/* dont need {} as it is a single statement
                also we are calling the function thats way () is appended
                 */}
                <button onClick = {() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default EventBind;
