
/* ---- Conditional Rendering ---- 
------- Approach 1 -----------*/

import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        if(this.state.isLoggedIn){
            return(
                <div> Welcome Biswajit </div>
            )
        }
        else{
            return(
                <div>
                    Wecome Guest
                </div>
            )
        }
    }
}

export default UserGreeting
