import React from 'react'

const Button = ({style, conteudo}) => {
  return (
    <button className={style}>{conteudo}</button>
  )
}

export default Button