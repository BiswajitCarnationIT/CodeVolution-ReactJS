
/* ---- Conditional Rendering ---- 
--------Approach 2 and 3 --------------*/

import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Biswajit</div>  //short circuot operator

        /*  Approach 3

        return (
            this.state.isLoggedIn ?
            <div>Wecome Biswajit</div> :
            <div> Wecome Guest</div>
        )

        */
        
        /*//Approach 2//

        let message
        if(this.state.isLoggedIn){
            message = <div> Wecome Biswajit</div>
        }
        else{
            message = <div> Wecome Guest</div>
        }

        return <div>{message}</div>
        */



        /*  //Approach 1//

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
        */
    }
}

export default UserGreeting
