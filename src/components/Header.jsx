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
            <ul className='ul__container'>
                <li className='li__container with__submenu'> POLO IT
                    <ul className='submenu'>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">ACERCA DE</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">QUÉ OFRECEMOS</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">ESPACIOS POLO</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">AUTORIDADES</a>
                        </li>
                    </ul>
                </li>
                <li className='li__container with__submenu'> PARTICIPAR
                    <ul className='submenu'>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">ASOCIATE</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">CONTACTO</a>
                        </li>
                    </ul>
                </li>
                <li className='li__container with__submenu'> INICIATIVAS
                    <ul className='submenu'>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">UTD</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">MONITOR TIC</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">ENCUESTA OFICINAS</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">PERFILES</a>
                        </li>
                    </ul>
                </li>
                <li className='li__container with__submenu'> SOCIOS
                    <ul className='submenu'>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">ASOCIADOS</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">BENEFICIOS</a>
                        </li>
                    </ul>
                </li>
                <li className='li__container with__submenu'> NOVEDADES
                    <ul className='submenu'>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">NOTICIAS</a>
                        </li>
                        <li className='submenu__item'>
                            <a className='submenu__link' href="">EVENTOS</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <input className='search__bar' type="text" placeholder='     Buscar' />
        </nav>
    </header>
  )
}

export default Header