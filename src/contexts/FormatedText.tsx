import { Link } from 'react-router-dom';
import { Theme } from '../components/theme';
import { useForm } from './FormContext'
import * as C from '../pages/Step3/styles'

export const FormatedText = () => {
    const { state, dispatch } = useForm();

    let upperSurName = state.surAuthor1.toUpperCase();

    let formated: any; //stores formated text 

    //REF 11
    if (state.refType2 === '11') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.subtitle}. Disponivel em: {state.url}. Publicado em: {state.dayPublic} de {state.monthPublic} de {state.yearPublic}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
        else if (state.radioCheck === '2') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{state.companyName}. <b className='bold'>{state.title}</b>. {state.local}. {state.noDate}. Disponivel em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                    </div>

                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 12 - blog
    else if (state.refType2 === '12') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. {state.title}. <span>In</span>: {state.responsableBlog}. <b className='bold'>{state.blogTitle}</b>. {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 13 - Podcast
    else if (state.refType2 === '13') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{state.namePodcastEpisode}. [Locução de]: {state.podcastAnnouncer}. {state.placePublic}: {state.namePodcast}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Podcast. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 14 - REDES S ** got inputs from radiocheck 2 to radiocheck1
    if (state.refType2 === '14') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{state.displayNameUser}. <b className='bold'>{state.socialMediaMensage}</b> [...]. {state.local}. {state.dayPublic} {state.monthPublic}. {state.yearPublic}. {state.userSocialMedia}. Disponivel em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                    </div>

                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 15 - email
    if (state.refType2 === '15') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{state.remetenteName}. <b className='bold'>{state.emailSubject}</b>. Destinatários: {state.destinatario}. {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. 1 mensagem eletrônica.</p>
                    </div>

                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 16 - wikipedia
    if (state.refType2 === '16') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{state.title}. <span className='italic'>In</span>: WIKIPÉDIA: a enciclopédia livre. [São Francisco, CA: Fundação Wikimedia], 2017. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                    </div>

                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 21 - livro
    if (state.refType2 === '21') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.edition}. ed. {state.local}: {state.publishingComp}, {state.yearPublic}. {state.paginationBook} p.</p>
                    </div>

                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 22 - ebook
    if (state.refType2 === '22') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.subtitle}. {state.local}: {state.publishingComp}, {state.yearPublic}. <span className='italic'>E-book</span>. {state.paginationBook} p. {state.doiCheckbox} Disponível em: {state.url}</p>
                    </div>

                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 31 - video
    if (state.refType2 === '31') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.local}, {state.yearPublic}. 1 vídeo ({state.durationVideo} min). Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 41 - reportagem
    if (state.refType2 === '41') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. {state.title}. <b className='bold'>{state.magazine}</b>, {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}.</p>
                    </div>

                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 42 - entrevista revista
    if (state.refType2 === '42') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. {state.title}. [Entrevista concedida a] {state.nameAuthor2} {state.surAuthor2}. <b className='bold'>{state.magazine}</b>, {state.local}, n. {state.numberMagaz}, p. {state.paginationBook}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}.</p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 43 - artigo revista
    if (state.refType2 === '43') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. {state.title}. <b className='bold'>{state.magazine}</b>, {state.local}, n. {state.numberMagaz}, p. {state.paginationBook}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}.</p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 44 - artigo internet
    if (state.refType2 === '44') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. {state.title}. <b className='bold'>{state.magazine}</b>, {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}</p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 51 - Tese
    if (state.refType2 === '51') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 52 - Dissertacao
    if (state.refType2 === '52') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Dissertação. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }

    //REF 53 - Tese na internet
    if (state.refType2 === '53') {

        if (state.radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}.</p>
                    </div>



                    <div className='buttons'>
                        <button >
                            Copiar Referência
                        </button>
                        <Link to="/step2" className='backButton'>Fazer Nova Referência</Link>
                    </div>

                    <hr />

                    <h2>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h2>
                    <p>Seguindo a ABNT NBR 6023:
                        <ul>
                            <li>Alinhamento de texto: à esquerda</li>
                            <li>Fonte: Times new roman ou Arial</li>
                            <li>Tamanho de fonte: 12</li>
                            <li>Espaçamento: simples</li>
                        </ul>

                    </p>
                </C.Container>
            )
        }
    }



    return formated;
}