import React ,{Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state = {    //Bind state value in the render function 
            message : 'welcome visitor'
        }
    }

    changeMessage(){
        this.setState({   
            message: 'Thank you for subscribing' //Object (new state of the component)
        })
    }

    render(){
        return (
            <div>
                <h1>
                    {this.state.message }
                </h1>
                <button onClick = {() => this.changeMessage()}> Subscribe </button>
            </div>
            
        )
    }

}

export default Message;