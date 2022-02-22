import * as C from './styles'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <C.Container>
            <ul>
                <li>
                    <Link to={'/sobre-nos'}>Sobre</Link>
                </li>
                <li>
                    <a href="mailto:example@gmail.com">Contato: example@gmail.com</a>
                </li>
            </ul>
            <small>Todos os Direitos Reservados. 2022</small>
        </C.Container>
    )
}