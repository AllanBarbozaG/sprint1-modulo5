import '../style/Button.css'

function Button({ name, className, func }){
  return (
    <button type='submit' onClick={func} className={ className }>{ name }</button>
  ) 
}

export default Button