import React from 'react'
import Text from '../Text/Text'
import style from './SecForms.module.css'

const SecForms = () => {
  return (
    <section className={style.secForms}>
        <div className={style.selection}>
            <span className={style.line} />
            <Text style={style.t1} conteudo={"Compartilhe a novidade"} />
            <span className={style.line} />
        </div>
        <Text style={style.p1} conteudo={"Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!"} />
    </section>

  )
}

export default SecForms