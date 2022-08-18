import React from 'react'

const Input = ({type, name, style}) => {
  return (
    <input type={type} name={name} className={style} />
  )
}

export default Input