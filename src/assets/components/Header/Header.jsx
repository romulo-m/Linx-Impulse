import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        {/* <div className={style.titulos}> */}
        <h3>uma seleção de produtos</h3>
        <h1>especial para você</h1>
        <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
        {/* </div> */}
        <nav>

        </nav>
    </header>
  )
}

export default Header