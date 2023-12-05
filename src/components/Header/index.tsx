import './styles.css';
import homeIcon from '../../assets/Home.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className='border-padding'>
            <div className='header-content-container container'>
                <nav className='navbar'>
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Início
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Produtos
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Sobre nós
                    </NavLink>
                </nav>
                <Link to="/">
                    <div>
                        <img src={homeIcon} alt="Home" />
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header