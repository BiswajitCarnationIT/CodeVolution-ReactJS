
/* -----Binding event handler use Arrow function as class property --- 
    Class property as arrow function
   - -- Change the way you define your methods in class ---
    Approach 4                     */

import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }

    /*
    clickHandler(){
        this.setState({     
            message: 'Good Buy'  
        })
        console.log(this)
    }
    */

    clickHandler = () =>{
        this.setState({
            message: 'Good Bye!'
        })
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
