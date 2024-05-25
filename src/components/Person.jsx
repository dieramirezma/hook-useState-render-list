/* eslint-disable react/prop-types */
export const Person = ({ name, role, img }) => {
  return (
    <div>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <p>{role}</p>
      </div>
    </div>
  )
}