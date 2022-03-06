import * as C from './styles';
import { ReactNode } from 'react';
import { Header } from '../header'
import { SideBarItem } from '../SideBarItem'
import { useForm } from '../../contexts/FormContext'
import { Footer } from '../footer';
import Logo  from './../theme/logoxl.png'

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container bgColor='red'>
                <Header />

                <C.Area id='mainContent'>
                    <C.Steps>
                        <C.Sidebar>

                            <SideBarItem
                                title="Passo 1"
                                description="Escolha de onde vem sua referência"
                                icon="one"
                                path="/"
                                active={state.currentStep === 1}
                            />
                            <SideBarItem
                                title="Passo 2"
                                description="Preencha algumas informações."
                                icon="two"
                                path="/"
                                active={state.currentStep === 2}
                            />
                            <SideBarItem
                                title="Finalizado!"
                                description="Agora é só copiar e colar."
                                icon="three"
                                path="/"
                                active={state.currentStep === 3}
                            />

                        </C.Sidebar>
                        <C.Page>
                            {children}
                        </C.Page>
                    </C.Steps>
                </C.Area>

                <Footer />
        </C.Container>
    )
}