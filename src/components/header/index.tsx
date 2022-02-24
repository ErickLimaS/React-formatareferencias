import * as C from './styles';
import { Link } from 'react-router-dom'

export const Header = () => {
    const Logo = require('./logo.png')

    return (
        <C.Container>
            <div className='divHeaderName'>
                <div>
                    <Link to="/" className='headerName'>
                        <img src={Logo} alt="Logo do Site Referência em ABNT" className='imgLogo' />
                    </Link>
                </div>
                <div>
                    <Link to="/" className='headerName'>
                        Referência em ABNT
                    </Link>
                </div>

            </div>
            <ul>
                <li className='no'><Link to="/como-usar">Como Usar</Link></li>
                <li><Link to="/modelos-abnt">Modelos em ABNT</Link></li>
                <li><Link to="/regras-da-norma-abnt">Regras da Norma ABNT</Link></li>
            </ul>
        </C.Container>
    );
}