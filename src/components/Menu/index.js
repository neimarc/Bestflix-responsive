import { useState } from 'react';
import CloseIcon from '../../assets/close.svg';
import MenuIcon from '../../assets/menu.svg';
import './menu-styles.css';

function Menu() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className={`${openMenu && 'full-menu'}`}>
            {openMenu ?
                <img
                    className='close-style'
                    style={{ display: `S{openMenu} ? 'block' : 'none'` }}
                    src={CloseIcon}
                    alt='close icon'
                    onClick={() => setOpenMenu(false)} />
                :
                <img
                    className='menu-style'
                    src={MenuIcon}
                    alt='menu icon'
                    onClick={() => setOpenMenu(true)} />
            }
            <ul className='menu'>
                <li>Ação</li>
                <li>Aventura</li>
                <li>Comédia</li>
                <li>Drama</li>
                <li>Ficção</li>
            </ul>
        </div>
    )
}

export default Menu