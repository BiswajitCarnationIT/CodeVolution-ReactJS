
/* ------- Approach 1 ------*/

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
    
    /* <button onClick = {this.clickHandler}>Click</button>  */ // not binded
    //Every update cost Rerender
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                
                {/*<button onClick = {this.clickHandler}>Click</button>  //Throws error  */}
                <button onClick = {this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind;
