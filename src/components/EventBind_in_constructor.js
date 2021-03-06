
/* -----Binding event handler in Constructor --- 
 -------- Approach 3 ------
*/

import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    
    clickHandler(){
        this.setState({     
            message: 'Good Bye'  
        })
        console.log(this)
    }

    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/* <button onClick = {this.clickHandler}>Click</button>  //Throws error if not binded in constructor */}

                {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
                <button onClick = {this.clickHandler}>Click</button>  
            </div>
        )
    }
}

export default EventBind;
