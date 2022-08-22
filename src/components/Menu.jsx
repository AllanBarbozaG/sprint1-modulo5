import '../style/Menu.css'
import Button from './Button'

function Menu() {
  return (
    <div className="menuDiv">
      <nav className="menuNav">
        <Button className='menuBtn' name='Conheça a Linx' />
        <Button className='menuBtn' name='Ajude o algorítmo' />
        <Button className='menuBtn' name='Seus produtos' />
        <Button className='menuBtn' name='Compartilhe' />
      </nav>
    </div>
  )
}

export default Menu