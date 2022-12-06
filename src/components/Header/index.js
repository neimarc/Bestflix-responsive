import './header-styles.css';
import Logo from '../../assets/logo.svg'
import Menu from '../Menu'

function Header() {
    return (
        <header>
            <img classname='logo' src={Logo} alt='logo' />
            <Menu />
        </header>
    )
}

export default Header