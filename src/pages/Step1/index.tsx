import { useNavigate } from 'react-router-dom'; //history didnt work
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { SelectOptions } from '../../contexts/selectOptionStep1'
import { Theme } from '../../components/theme';
import { ChangeEvent, useEffect } from 'react';

export const Step1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if (state.refType2 === '') {
            if (state.refType1 === '11') {
                navigate('./step2')
            }
        }
        else if (state.refType1 !== '' || state.refType2 !== '') {
            navigate('./step2')
        }
        else {
            alert("preencha os dados")
        }
    };

    const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: FormActions.setRefType1,
            payload: e.target.value
        });
    }
    return (
        <Theme>
            <C.Container>

                <h1>Primeiro, Escolha de Onde Vem a Sua Referência</h1>
                <p>Escolha uma das opções da lista abaixo</p>

                <hr />

                <div className='selectStep1'>
                    <label>
                        Essa referência vem de um(a) ... /////(selecionado {state.refType1})

                        <select
                            autoFocus
                            onChange={handleOptionChange}
                            value={state.refType1}
                        >
                            <option value='' disabled>De onde vem sua Referência</option>
                            <option value='10'>Internet - Ex: Sites, Blogs, Podcasts, Redes Sociais, Email, Wikipedia</option>
                            <option value='20'>Livro ou E-Book</option>
                            <option value='30'>Mídia - Ex: Vídeo</option>
                            <option value='40'>Jornal ou Revista - Ex: Reportagem, Entrevistas, Artigos</option>
                            <option value='50'>Trabalhos Acadêmicos / TCC</option>
                        </select>
                    </label>

                </div>

                <SelectOptions />

                <div className='buttons'>
                    <button onClick={handleNextStep}>Próximo</button>
                </div>
            </C.Container>

        </Theme>
    );
}