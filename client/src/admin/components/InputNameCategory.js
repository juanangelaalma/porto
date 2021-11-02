import React from 'react'

const InputNameCategory = ({ categoryName, setCategoryName }) => {
  return (
    <input className="form-control w-75" type="text" name="name" value={categoryName} onChange={setCategoryName} />
  )
}

export default InputNameCategory
