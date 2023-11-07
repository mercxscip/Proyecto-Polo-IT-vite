import logo from './img/icons/logopoloit.png'
import './header.css'

const Header = () => {
  return (
    <header>
        <nav className='navbar'>
            <picture>
                <a href="https://www.poloitbuenosaires.org.ar">
                <img className='logo__poloit' src={logo} alt="" />
                </a>
            </picture>
        </nav>
    </header>
  )
}

export default Header