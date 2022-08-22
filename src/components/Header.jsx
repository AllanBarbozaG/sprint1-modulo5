import '../style/Header.css'
import Menu from './Menu'

function Header() {
  return (
    <header className='header'>
      <div className="backgroundColor">
        <div className="backgroundColorCut"></div>
      </div>
      <div className='descriptionDiv'>
        <p className='descriptionFirstP'>uma seleção de produtos</p>
        <h3 className='descriptionH3'>especial para você</h3>
        <p className='descriptionSecondP'>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      </div>
      <Menu />
    </header>
  )
}

export default Header