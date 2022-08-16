import React from 'react'
import Person from './Person'

function NameList() {
//   const name = ['Ray', 'Joy', 'Josh']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Rohan',
            age: 30,
            skill: 'Bootstrap'
        },
        {
            id: 3,
            name: 'Jay',
            age: 33,
            skill: 'Angular'
        }
    ]

//   let nameList = name.map(name => <h2>{name}</h2>)
    const personList = persons.map(person => <Person person={person} />)
    return <div>{personList}</div>
}

export default NameList