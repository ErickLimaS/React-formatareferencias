import * as C from './styles';
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <C.Container>
            <Link to="/" className='headerName'>Formata Bibliografias</Link>
            <ul>
                <li className='no'><Link to="/Como-Usar">Como Usar</Link></li>
                <li><Link to="/Modelos-Abnt">Modelos em ABNT</Link></li>
                <li><Link to="/exemplo">Exemplo</Link></li>
            </ul>
        </C.Container>
    );
}