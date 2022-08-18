import React from 'react'

const Text = ({style, conteudo}) => {
  return (
    <p className={style}>{conteudo}</p>
  )
}

export default Text