import { useNavigate, Link } from 'react-router-dom'; //history didnt work
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/theme';
import { useEffect, useState } from 'react';
import { FormatedText } from '../../contexts/FormatedText';

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
        <Theme>

            <FormatedText/>

        </Theme>
        
    );
}