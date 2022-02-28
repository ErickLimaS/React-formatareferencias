import { useNavigate, Link } from 'react-router-dom'; //history didnt work
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/theme';
import { useEffect, useState } from 'react';
import { FormatedText } from '../../contexts/FormatedText';
import * as C from './styles'

export const Step3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [title, setTitle] = useState("Carregando...");

    useEffect(() => {
        document.title = title;
        if (state.refType1 === '') {
            navigate('/');
        }
        setTitle('Concluído! - Referência em ABNT')
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [title])

    useEffect(() => {
        if (state.refType1 === '') {
            navigate('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, []);

    return (
        <C.Container>
            <Theme>

                <FormatedText />

                <h2>Copie a referência acima e cole ou transcreva no seu trabalho.</h2>
                <div className='buttons'>
                    <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                </div>

                <hr />

                <h3>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h3>
                <p className='lastP'>Seguindo a ABNT NBR 6023 (Atual/2022):
                    <ul>
                        <li>Espaçamento: simples</li>
                        <li>Fonte: Times new roman ou Arial</li>
                        <li>Tamanho de fonte: 12</li>
                        <li>Alinhamento de texto: à esquerda</li>
                    </ul>
                </p>

            </Theme>
        </C.Container>

    );
}