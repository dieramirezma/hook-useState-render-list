import './App.css'
import { Persons } from './components/Persons'
import { useState } from 'react'
function App () {
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
    <div className='App'>
      <div className='container'>
        <h1 className='font-bold text-3xl'>Renderizando listas</h1>
        <Persons persons={persons} setPersons={setPersons} />
      </div>
    </div>
  )
}

export default App
