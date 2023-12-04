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
                <div className='menu-item'>
                    Computadores
                </div>
                <div className='menu-item'>
                    Electrônicos
                </div>
                <div className='menu-item'>
                    Livros
                </div>
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