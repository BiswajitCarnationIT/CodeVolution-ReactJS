/* ----------   Methods as props ----- 

Child wanted to communicate to parent.

passing ref to a method to child component

*/

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
            parentnName: 'Parent'
            
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert('Hello ' + this.state.parentnName)
        //alert(`Hello ${this.state.parentnName}` )
    }
    

    render() {
        return (
            <div>

                <ChildComponent greetHandler = {this.greetParent}/>  {/*greetHandler is attribute and though this we are   */}
                                                                      {/*passing ref to  greetParent method as a prop called greetHandler  */}
            </div>                                                   
        )
    }
}

export default ParentComponent;
