import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Ray', 'Joy', 'Josh', 'Ray']
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

  let nameList = names.map((name, index) => <h2 key={index}>{index}) {name}</h2>)

    // const personList = persons.map(person => <Person key={person.name} person={person} />)
    return <div>{nameList}</div>
}

export default NameList