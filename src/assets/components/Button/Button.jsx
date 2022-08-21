import React from 'react'

const Button = ({style, conteudo, onClick}) => {
  return (
    <button className={style} onClick={onClick}>{conteudo}</button>
  )
}

export default Button