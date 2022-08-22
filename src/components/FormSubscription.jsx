import '../style/FormSubscription.css'
import FormInputWithLabelField from './FormInpuWithLabelFieldtField'
import { useState } from 'react'
import { checkCpf, checkEmail, checkName } from '../service/validations';

function FormSubscription() {
  const [currentNameInputValue, setCurrentNameInputValue] = useState();
  const [checkedName, setCheckedName] = useState();
  const [currentEmailInputValue, setCurrentEmailInputValue] = useState();
  const [checkedEmail, setCheckedEmail] = useState();
  const [currentCpfInputValue, setCurrentCpfInputValue] = useState();
  const [checkedCpf, setCheckedCpf] = useState();

  return (
    <form action="send" className="formSubscription">

      {
        currentNameInputValue != null &&
        currentNameInputValue != undefined &&
        checkedName == false ?
        (
          <p className='checkedInputReturnMessage'>Nome inválido.</p>
        ) :
        false
      }

      <FormInputWithLabelField
        labelClassName='formLabel'
        labelHtmlFor='name'
        labelValue='Seu nome:'
        inputClassName='formInput'
        inputName='name'
        validationCallBack={(e) => {
          setCurrentNameInputValue(e.target.value)
          setCheckedName(checkName(e.target.value))
        }}
      />

      {
        currentEmailInputValue != null &&
        currentEmailInputValue != undefined &&
        checkedEmail == false ?
        (
          <p className='checkedInputReturnMessage'>Email inválido.</p>
        ) :
        false
      }

      <FormInputWithLabelField
        labelClassName='formLabel'
        labelHtmlFor='email'
        labelValue='E-mail:'
        inputClassName='formInput'
        inputName='email'
        validationCallBack={(e) => {
          setCurrentEmailInputValue(e.target.value)
          setCheckedEmail(checkEmail(e.target.value))

        }}
      />

      {
        currentCpfInputValue != null &&
        currentCpfInputValue != undefined &&
        checkedCpf == false ?
        (
          <p className='checkedInputReturnMessage'>CPF inválido.</p>
        ) :
        false
      }

      <FormInputWithLabelField
        labelClassName='formLabel'
        labelHtmlFor='cpf'
        labelValue='CPF:'
        inputClassName='formInput'
        inputName='cpf'
        validationCallBack={(e) => {
          setCurrentCpfInputValue(e.target.value)
          setCheckedCpf(checkCpf(e.target.value))
        }}
      />

      <div className="radioBtnsDiv">
        <div className='genderDiv'>
          <input type='radio' className="formInputRadio" name="gender" />
          <label className="formLabelRadio" htmlFor="gender">Masculino</label>
        </div>
        <div className='genderDiv'>
          <input type='radio' className="formInputRadio" name="gender" />
          <label className="formLabelRadio" htmlFor="gender">Feminino</label>
        </div>
      </div>
        

      <button className="sendBtn" onClick={(e) => {
        e.preventDefault()
        checkedName && 
        checkedEmail &&
        checkedCpf ?
        alert('Obrigado! Recebemos suas informações e entraremos em contato.') :
        alert('Dados incorretos. Por gentileza verifique as informações e tente enviar novamente.')        
      }}>Enviar</button>
    </form>
  )
}

export default FormSubscription