import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increment(){
       
      /*this.setState(
        {
          count: this.state.count + 1  //object
        },() => {
            console.log('Callback value',this.state.count)
      })*/

        /*new*/
        /*
        this.setState((prevState) => ({
            count:prevState.count+1
        }))
        */
        this.setState((prevState,props) => ({
            count:prevState.count+1
        }))


       console.log(this.state.count)   //called before setState() sol is pass a 2nd parameter to setState()          
    }
    

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <div> count - {this.state.count} </div>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
