/* eslint-disable react/prop-types */
import { Person } from './Person'
import { useState } from 'react'

export const Persons = ({ persons, setPersons }) => {
  const [editingId, setEditingId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [personToDelete, setPersonToDelete] = useState(null)
  const [editedPerson, setEditedPerson] = useState({
    name: '',
    role: '',
    img: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedPerson(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleEdit = (id) => {
    setEditingId(id)
    setIsEditing(true)
    const personToEdit = persons.find(person => person.id === id)
    setEditedPerson({ ...personToEdit })
  }

  const handleSave = () => {
    // Actualizar el estado de persons con la persona editada
    setPersons(persons.map(person => person.id === editingId ? editedPerson : person))
    setEditingId(null)
    setEditedPerson({ name: '', role: '', img: '' })
    setIsEditing(false)
  }

  const handleDelete = (id) => {
    setPersonToDelete(id)
  }

  const confirmDelete = () => {
    setPersons(persons.filter(person => person.id !== personToDelete))
    setPersonToDelete(null)
  }

  const cancelDelete = () => {
    setPersonToDelete(null)
  }

  const handleCreate = () => {
    setPersons([...persons, { id: persons.length + 1, ...editedPerson }])
    setEditedPerson({ name: '', role: '', img: '' })
  }

  return (
    <div>
      <h2 className='font-bold text-2xl'>IT Team</h2>
      <div className='flex flex-row gap-4 justify-center flex-wrap'>
        {persons.map((person) => {
          return (
            <div key={person.id}>
              <Person
                name={person.name}
                role={person.role}
                img={person.img}
                handleEdit={() => handleEdit(person.id)}
                handleDelete={() => handleDelete(person.id)}
              />
            </div>
          )
        })}
      </div>
      <div className='flex flex-col mt-10 max-w-sm mx-auto'>
        <h2 className='text-2xl font-bold'>{isEditing ? 'Modificar datos' : 'Datos de la nueva persona'}</h2>
        <div className='flex flex-col'>
          <input className='input-base mb-4' type='text' name='name' value={editedPerson.name} onChange={handleChange} placeholder='Nombre' />
          <input className='input-base mb-4' type='text' name='role' value={editedPerson.role} onChange={handleChange} placeholder='Rol' />
          <input className='input-base mb-4' type='text' name='img' value={editedPerson.img} onChange={handleChange} placeholder='URL de la imagen' />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={isEditing ? handleSave : handleCreate}>{isEditing ? 'Guardar' : 'Crear'}</button>
      </div>
      {/* Delete Modal */}
      <div id='delete-modal' aria-hidden='true' tabIndex='-1' className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
        <div className='relative p-4 w-full max-w-2xl max-h-full'>
          {/* Modal content */}
          <div className='relative bg-white rounded-lg shadow'>
            {/* Modal header */}
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t '>
              <h4 className='text-xl font-semibold text-gray-900'>Confirmar eliminación</h4>
              <button type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center' data-modal-hide='delete-modal'>
                <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className='p-4 md:p-5 space-y-4 text-gray-500'>
              <p>¿Estás seguro de eliminar a {persons.find(person => person.id === personToDelete)?.name}</p>
            </div>
            {/* Modal footer */}
            <div className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b'>
              <button data-modal-hide='delete-modal' type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ' onClick={confirmDelete}>Eliminar</button>
              <button data-modal-hide='delete-modal' type='button' className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ' onClick={cancelDelete}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
