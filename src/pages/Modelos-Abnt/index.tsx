import * as C from './styled'
import { Theme } from '../../components/theme2'
import { useEffect, useState } from 'react';

export const ModelosAbnt = () => {
    const [title, setTitle] = useState("Carregando...");

    useEffect(() => {
        document.title = title;
        setTitle('Modelos de Trabalho em ABNT | Referência em ABNT')
    }, [title])

    return (
        <Theme>
            <C.Container>
                <h1>Modelos Prontos de Trabalho em ABNT</h1>
                <h2>Veja alguns modelos prontos ou baixe um deles e apenas preencha!</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias soluta unde, et quasi quos hic distinctio quaerat dolore nisi perferendis fuga dolores atque recusandae rem, dicta minima sint omnis iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis repellat maxime laboriosam voluptatum, obcaecati dolore a? Nisi quia alias aliquam placeat quas repudiandae suscipit excepturi, ipsam explicabo omnis labore vero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fugiat in eius eos odio error alias ad sint quibusdam, beatae incidunt quaerat suscipit. Dolor magni, distinctio tempore asperiores cumque tenetur.

                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias soluta unde, et quasi quos hic distinctio quaerat dolore nisi perferendis fuga dolores atque recusandae rem, dicta minima sint omnis iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis repellat maxime laboriosam voluptatum, obcaecati dolore a? Nisi quia alias aliquam placeat quas repudiandae suscipit excepturi, ipsam explicabo omnis labore vero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fugiat in eius eos odio error alias ad sint quibusdam, beatae incidunt quaerat suscipit. Dolor magni, distinctio tempore asperiores cumque tenetur.

                </p>
            </C.Container>
        </Theme>
    )
};