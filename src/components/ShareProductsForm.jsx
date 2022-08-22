import FormInputWithLabelField from "./FormInpuWithLabelFieldtField"
import '../style/ShareProductsForm.css'
import Button from "./Button"

function ShareProductsForm() {
  return (
    <>
      <h3 className='productsSectionTitle'>
        <hr size='2' width='38%' />
        Compartilhe a novidade
        <hr size='2' width='38%' />
      </h3>

      <p className="inviteP">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

      <div className="inviteForm">
        <div className="adjust">
          <FormInputWithLabelField
            labelClassName='formLabel formLabelFooter'
            labelHtmlFor='friendsName'
            labelValue='Nome do seu amigo:'
            inputClassName='formInput forInputFooter'
            inputName='friendsName'
          />
        </div>

        <div className="adjust">
          <FormInputWithLabelField
            labelClassName='formLabel'
            labelHtmlFor='email'
            labelValue='E-mail:'
            inputClassName='formInput'
            inputName='email'
          />
        </div>

        <Button
          name='Enviar agora'
          className='sendNowBtn'
        />
      </div>
    </>
  )
}

export default ShareProductsForm