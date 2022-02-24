import { Theme } from '../../components/theme2'
import * as C from './styles'

export const Creditos = () => {

    return (
        <Theme>
            <C.Container>
                <h1>Créditos</h1>
                <h2>O que e quem de certa forma ajudou a fazer esse site.</h2>

                <div>
                    <a href="https://www.flaticon.com/free-icons/text" title="text icons">Text icons created by Freepik - Flaticon</a>
                    <a href='svgrepo.com' title='svg icons'>Icons by svgrepo.com</a>
                </div>

            </C.Container>
        </Theme>
    )
}