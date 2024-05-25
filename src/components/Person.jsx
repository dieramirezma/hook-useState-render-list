/* eslint-disable react/prop-types */
export const Person = ({ name, role, img }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={img} alt={name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{role}</p>
        </div>
      </div>
    </>
  )
}