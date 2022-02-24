import * as C from './styles';
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <C.Container>
            <Link to="/" className='headerName'>Referências em Abnt</Link>
            <ul>
                <li className='no'><Link to="/como-usar">Como Usar</Link></li>
                <li><Link to="/modelos-abnt">Modelos em ABNT</Link></li>
                <li><Link to="/regras-da-norma-abnt">Regras da Norma ABNT</Link></li>
            </ul>
        </C.Container>
    );
}