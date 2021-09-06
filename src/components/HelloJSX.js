import React from 'react'

const Hello = () => {
    /*
    return (
        <div className = 'dummyClass'> 
            <h1> Hello JSX</h1>
        </div>
    )
    */
   //return React.createElement('div',null,'<h1> Hello JSX <h1>')
   /*return React.createElement(
       'div',
       null,
       React.createElement('h1',null,'Hello without JSX'))*/
    return React.createElement(
       'div',
       {id: 'hello',className:'dummyClass'},  //assigning id attribute on div tag
       React.createElement('h1',null,'Hello without JSX'))

} 

export default Hello;