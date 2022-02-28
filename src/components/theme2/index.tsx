import * as C from './styles';
import { ReactNode } from 'react';
import { Header } from '../header'
import { useForm } from '../../contexts/FormContext'
import { Link } from 'react-router-dom';
import { Footer } from '../footer';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <Header />
            <C.Area>

                <C.Steps>
                    <C.Sidebar>

                        <div>
                            <Link to={'/'}>
                                <h2 className='121'>
                                    Fazer Minha Referência Agora
                                </h2>
                            </Link>
                        </div>


                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
            <Footer />
        </C.Container >
    )
}