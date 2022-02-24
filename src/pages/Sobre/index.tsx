import { useEffect, useState } from "react";
import { Theme } from "../../components/theme2"
import * as C from './styles'


export const Sobre = () => {
    const [title, setTitle] = useState("Carregando...");

    useEffect(() => {
        document.title = title;
        setTitle('Sobre Nós - Referência em ABNT')
    }, [title])

    return (
        <Theme>
            <C.Container>
                <h1>Sobre Nós</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi aperiam veniam asperiores, eveniet quaerat nulla cumque numquam reiciendis dolorum nam magnam. Nisi reprehenderit ipsa officia voluptate id ut architecto!
                </p>
            </C.Container>
        </Theme>
    )
}