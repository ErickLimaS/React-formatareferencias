import { useNavigate, Link } from 'react-router-dom'; //history didnt work
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/theme';
import { useEffect } from 'react';
import { RefInputs } from '../../contexts/FormInputs' //test
import { Button } from '@mantine/core';

export const Step2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.refType1 === '') {
            navigate('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }, [])

    const handleNextStep = () => {
        console.log(state);
        if (state.refType2) {
            navigate('/step3')
        }
        else {
            alert("preencha os dados")
        }
    };

    return (
        <Theme>
            <C.Container>

                <h1>Certo. Agora Falta Algumas Outras Infomações.</h1>

                <p>Preencha os dados abaixo. Após o preenchimento, clique em "Formatar Referência".</p>

                <hr />
                
                <RefInputs />

                <div className='buttons'>
                    <Link to="/" className='backButton'>Voltar</Link>
                    <Button color="teal" size="lg" onClick={handleNextStep}>
                        Formatar Referência
                    </Button>
                </div>
            </C.Container>

        </Theme>
    );
}