import { useEffect, useState } from "react";
import { Theme } from "../../components/theme2"
import * as C from './styles'


export const Contatos = () => {
    const [title, setTitle] = useState("Carregando...");

    useEffect(() => {
        document.title = title;
        setTitle('Contatos | Referência em ABNT')
    }, [title])

    return (
        <Theme>
            <C.Container>
                <h1>Contatos</h1>

                <p>
                    Atualmente estamos com esses meios de contato:
                </p>
                <ul>
                    <li>Email: <a href="mailto:referenciaemabnt@gmail.com">referenciaemabnt@gmail.com</a></li>
                </ul>
            </C.Container>
        </Theme>
    )
}