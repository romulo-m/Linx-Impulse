import React from 'react'
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../Button/Button";
import style from './Forms.module.css'

const Forms = () => {
  return (
    <form className={style.forms}>
        <Label conteudo={'Seu nome:'} />
        <Input type={'text'} name={'nome'} style={style.inputText}/>
        <Label conteudo={'Email:'}/>
        <Input type={'email'} name={'email'} style={style.inputText}/>
        <Label conteudo={'CPF:'}/>
        <Input type={'text'} name={'cpf'} style={style.inputText}/>
        <div className={style.radio}>
        <Input type={'radio'} name={'sexo'} style={style.inputRadio}/> 
        <Label conteudo={'Masculino'}/>
        <Input type={'radio'} name={'sexo'} style={style.inputRadio}/>
        <Label conteudo={'Feminino'}/>
        </div>
        <Button conteudo={'Enviar'} style={style.btn}/>
    </form>
  )
}

export default Forms