import * as C from './styles'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <C.Container>
            <ul>
                <li>
                    <a href={'/about'}>Sobre</a>
                </li>
                <li>
                    <a href={'/terms-and-conditions'}>Termos e Condições</a>
                </li>
                <li>
                    <a href={'/privacy'}>Política de Privacidade</a>
                </li>
                <li>
                    <a href={'/contacts'}>Contato</a>
                </li>
                <li>
                    <a href={'/credits'}>Créditos</a>
                </li>
            </ul>
            <small>Referência em ABNT © 2022. Todos os Direitos Reservados.</small>
        </C.Container>
    )
}