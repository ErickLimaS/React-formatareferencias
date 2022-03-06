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
    const logo = require('./logoxl.png')

    return (
        <C.Container bgColor='red'>
                <Header />

                <div className='divMainText'>
                    <div className='mainText'>
                        <h1>Faça sua Referência em ABNT em Um Instante!</h1>
                        <p id='p1'>Formate todas as Referências Bibliograficas do seu trabalho com as normas ABNT e use no seu trabalho escolar, projeto de faculdade ou TCC.</p>
                        <p id='p2'>Siga os passos abaixo e cole a referência já pronta na área de "Referências Bibliografias" do seu trabalho em ABNT!</p>
                        <a href='#mainContent' className='buttonAMainText'>Fazer Minha Referência Agora!</a>
                    </div>
                    <div className='divImgLogoxl'>
                        <img src={logo} alt="Logo do site Referência em ABNT" className='imgLogoxl' />
                    </div>
                    <p id="disapearP">Para melhor experiência, recomendamos usar a ferramenta em um Computador ou Notebook.</p>
                </div>

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