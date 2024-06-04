/* eslint-disable react/prop-types */
export const Person = ({ name, role, img, handleEdit, handleDelete }) => {
  return (
    <div className='max-w-60 rounded overflow-hidden shadow-lg'>
      <img src={img} alt={name} className='w-full'/>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>{role}</p>
      </div>
      <div className='flex justify-evenly flex-wrap mb-5'>
        <button className='btn btn-blue' onClick={handleEdit}>Editar</button>
        <button data-modal-target="delete-modal" data-modal-toggle="delete-modal" className='btn btn-red' onClick={ handleDelete}>Eliminar</button>
      </div>
    </div>
  )
}