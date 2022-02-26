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
                    Somos uma equipe que já passamos por muitos trabalhos e projetos, seja de faculdade ou de escola, onde alguns precisavam ser feitos em conjunto com as normas ABNT.
                </p>
                <p>
                    Então, um dia após ter terminado um projeto da faculdade, pensei que as normas ABNT podem não ser tão fáceis assim para se aprender. Além do mais, apenas olhamos essas normas quando precisamos fazer esses trabalhos escolares e universitários.
                </p>
                <p>
                    Pensamos juntos sobre isso, e vimos que poderiamos fazer pelo menos parte do projeto ou trabalho de algumas pessoas mais fáceis.
                </p>
                <p>
                    Então decimos criar o site. Sempre pensando no modo que as pessoas possam apenas olhar e entender o que dá para ser feito e que realmente pode ajudar o trabalho em ABNT delas ser bem sucedido.
                </p>
                <p>
                    Não podemos deixar de citar que somos da área de T.I., e estamos, além de tudo, testando nossos conhecimentos sobre front-end.
                </p>
            </C.Container>
        </Theme>
    )
}