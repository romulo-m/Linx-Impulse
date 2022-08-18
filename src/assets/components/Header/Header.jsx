import React from 'react'
import Text from '../Text/Text.jsx'
import Button from '../Button/Button.jsx'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.titulos}>
        <Text style={style.p1} conteudo={'uma seleção de produtos'}/>
        <Text style={style.p2} conteudo={'especial para você'}/>
        <Text style={style.p3} conteudo={'Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!'}/>
        </div>
        <nav className={style.navBar}>
        <Button style={style.btn} conteudo={'Conheça a Linx'}/>
        <Button style={style.btn} conteudo={'Ajude o algorítimo'}/>
        <Button style={style.btn} conteudo={'Seus produtos'}/>
        <Button style={style.btn} conteudo={'Compartilhe'}/>
        </nav>
    </header>
  )
}

export default Header