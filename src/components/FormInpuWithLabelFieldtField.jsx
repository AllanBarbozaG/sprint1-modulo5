function FormInputWithLabelField({ labelClassName, labelHtmlFor, labelValue, inputClassName, inputName, validationCallBack }) {
  return (
    <>
      <label className={ labelClassName } htmlFor={labelHtmlFor}> { labelValue } </label>
      <input onChange={validationCallBack} className={inputClassName} name={inputName} /><br/>
    </>
  )
}

export default FormInputWithLabelField;