import * as C from './styles';
import { ReactNode } from 'react';
import { Header } from '../header'
import { SideBarItem } from '../SideBarItem'
import { useForm } from '../../contexts/FormContext'
import { Footer } from '../footer';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <Header />

            <div className='mainTitle'>
                <h1>Faça sua Referência em um instante!</h1>
                <p>Formate toda a referências do seu trabalho usando as normas ABNT e use no seu trabalho escolar, projeto de faculdade ou TCC.</p>
                <p>Siga os passos abaixo e cole a referência já pronta na área de "Referências Bibliografias" do seu trabalho em ABNT!</p>
            </div>

            <C.Area>
                <C.Steps>
                    <C.Sidebar>
                        <SideBarItem
                            title="Passo 1"
                            description="Escolha de onde vem sua referência"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SideBarItem
                            title="Passo 2"
                            description="Preencha algumas informações."
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SideBarItem
                            title="Finalizado!"
                            description="Agora é só copiar e colar."
                            icon="mail"
                            path="/step3"
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