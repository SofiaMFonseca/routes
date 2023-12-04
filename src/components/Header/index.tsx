import './styles.css';
import homeIcon from '../../assets/Home.svg';

function Header() {

    return (
        <header>
            <div className='header-content-container container'>
                <nav className='navbar'>
                    <div className='menu-item'>
                        Início
                    </div>
                    <div className='menu-item'>
                        Produtos
                    </div>
                    <div className='menu-item'>
                        Sobre nós
                    </div>
                </nav>
                <div>
                    <img src={homeIcon} alt="Home" />
                </div>
            </div>
        </header>
    );
}

export default Header