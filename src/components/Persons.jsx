import { useState } from 'react'
import { Person } from './Person'

export const Persons = () => {
  
  const [persons, setPersons] = useState(
    [
      {
        id: 1,
        name: 'Diego Ramirez',
        role: 'Frontend Developer',
        img: 'https://bootdey.com/img/Content/avatar/avatar1.png'
      },
      {
        id: 2,
        name: 'Pedro Fernandez',
        role: 'Backend Developer',
        img: 'https://bootdey.com/img/Content/avatar/avatar2.png'
      },
      {
        id: 3,
        name: 'Andrea Perez',
        role: 'UX/UI Designer',
        img: 'https://bootdey.com/img/Content/avatar/avatar3.png'
      }
    ]
  )

  return (
    <div>
      <h2>IT Team</h2>
      <div>
        {persons.map((person) => {
          return (
            <div key={person.id}>
              <Person
                name={person.name}
                role={person.role}
                img={person.img}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}