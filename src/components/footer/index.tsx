import * as C from './styles'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <C.Container>
            <ul>
                <li>
                    <Link to={'/about'}>Sobre</Link>
                </li>
                <li>
                    <Link to={'/terms-and-conditions'}>Termos e Condições</Link>
                </li>
                <li>
                    <Link to={'/privacy'}>Política de Privacidade</Link>
                </li>
                <li>
                    <Link to={'/contacts'}>Contato</Link>
                </li>
                <li>
                    <Link to={'/credits'}>Créditos</Link>
                </li>
            </ul>
            <small>Referência em ABNT © 2022. Todos os Direitos Reservados.</small>
        </C.Container>
    )
}