import { useState } from 'react'
import { Person } from './Person'

export const Persons = () => {
  
  const [persons, setPersons] = useState(
    [
      {
        id: 1,
        name: 'Garbiel',
        role: 'Frontend Developer',
        img: 'https://bootdey.com/img/Content/avatar/avatar1.png'
      },
      {
        id: 2,
        name: 'Brandy',
        role: 'Backend Developer',
        img: 'https://bootdey.com/img/Content/avatar/avatar2.png'
      },
      {
        id: 3,
        name: 'Felipe',
        role: 'UX/UI Designer',
        img: 'https://bootdey.com/img/Content/avatar/avatar4.png'
      }
    ]
  )

  return (
    <div>
      <h2 className='font-bold text-2xl'>IT Team</h2>
      <div className='flex flex-row gap-4 justify-center'>
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