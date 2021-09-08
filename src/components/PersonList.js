import React from 'react'

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
    const personList = persons.map(person => <h2>I am {person.name}. I know {person.skill}</h2>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList;
