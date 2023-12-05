import { NavLink } from 'react-router-dom';
import './styles.css';

type Props = {
    product1: string;
    product2: string;
    product3: string;
}

function Card({ product1, product2, product3 }: Props) {

    return (
        <div className='container mt20'>
            <nav className='navbar-container'>
                <NavLink to="/products/computers" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                    Computadores
                </NavLink>
                <NavLink to="/products/electronics" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                    Electrônicos
                </NavLink>
                <NavLink to="/products/books" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                    Livros
                </NavLink>
            </nav>
            <div className='mt20'>
                <h4>{product1}</h4>
                <h4>{product2}</h4>
                <h4>{product3}</h4>
            </div>
        </div>

    );
}

export default Card