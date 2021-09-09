import React from 'react'
import Person from './Person'

function PersonList() {
    const persons =[
        {
            id:1,
            name:'Bruce',
            age: 30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age: 25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:23,
            skill:'Node'
        }
    ]

    //key must be unique 
    //Key prop is not accessable in child component
    const personList = persons.map(person => (
        <Person key ={person.id} personProp = {person}></Person>
    ))
    
    return (
        <div>
            {personList}
        </div>
    )

}

export default PersonList;
