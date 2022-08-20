import React from 'react'
import Text from '../Text/Text'
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from '../Button/Button';
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
        <section className={style.forms}>
          <div className={style.forms1}>
            <Label conteudo={'Nome do seu amigo:'} />
            <Input type={'text'} name={'nome'} style={style.inputText}/>
          </div>
          <div className={style.forms2}>
            <Label conteudo={'Email:'}/>
            <Input type={'email'} name={'email'} style={style.inputText}/>
          </div>
        </section>
        <div className={style.divBtn}>
          <Button conteudo={'Enviar agora'} style={style.btn}/>
        </div>
        
        
    </section>

  )
}

export default SecForms