import { Link } from 'react-router-dom';
import { Theme } from '../components/theme';
import { useForm } from './FormContext'
import * as C from '../pages/Step3/styles'

export const FormatedText = () => {
    const { state, dispatch } = useForm();

    let upperSurName1 = state.surAuthor1.toUpperCase();
    let upperSurName2 = state.surAuthor2.toUpperCase();
    let upperSurName3 = state.surAuthor3.toUpperCase();
    let upperSurName4 = state.surAuthor4.toUpperCase();
    let upperSurName5 = state.surAuthor5.toUpperCase();
    let upperSurName6 = state.surAuthor6.toUpperCase();

    let formated: any; //stores formated text 

    let etalAux: any;

    etalAux = state.etAlCheckbox



    //REF 11
    if (state.refType2 === '11') {

        if (state.radioCheck === '1') {
            if (state.etAlCheckbox !== '') { //checkbox not checked
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. <span className='italic'>et al</span>. <b className='bold'>{state.title}</b>. {state.subtitle}. Disponível em: {state.url}. Publicado em: {state.dayPublic} {state.monthPublic}, {state.yearPublic}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                        <hr />

                    </C.Container>
                )
            }
            if (state.auxNewAuthor === 0) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.subtitle}. Disponível em: {state.url}. Publicado em: {state.dayPublic} {state.monthPublic}, {state.yearPublic}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 1) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. <b className='bold'>{state.title}</b>. {state.subtitle}. Disponível em: {state.url}. Publicado em: {state.dayPublic} {state.monthPublic}, {state.yearPublic}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 2) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. <b className='bold'>{state.title}</b>. {state.subtitle}. Disponível em: {state.url}. Publicado em: {state.dayPublic} {state.monthPublic}, {state.yearPublic}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 3) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. <b className='bold'>{state.title}</b>. {state.subtitle}. Disponível em: {state.url}. Publicado em: {state.dayPublic} {state.monthPublic}, {state.yearPublic}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 4) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. <b className='bold'>{state.title}</b>. {state.subtitle}. Disponível em: {state.url}. Publicado em: {state.dayPublic} {state.monthPublic}, {state.yearPublic}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 5 || state.auxNewAuthor > 5) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. {upperSurName6}, {state.nameAuthor6}. <b className='bold'>{state.title}</b>. {state.subtitle}. Disponível em: {state.url}. Publicado em: {state.dayPublic} {state.monthPublic}, {state.yearPublic}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
        }
        else if (state.radioCheck === '2') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{state.companyName}. <b className='bold'>{state.title}</b>. {state.local}. {state.noDate}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 12 - blog
    else if (state.refType2 === '12') {

        if (state.radioCheck === '1') {
            if (state.auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {state.title}. <span>In</span>: {state.responsableBlog}. <b className='bold'>{state.blogTitle}</b>. {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {state.title}. <span>In</span>: {state.responsableBlog}. <b className='bold'>{state.blogTitle}</b>. {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {state.title}. <span>In</span>: {state.responsableBlog}. <b className='bold'>{state.blogTitle}</b>. {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {state.title}. <span>In</span>: {state.responsableBlog}. <b className='bold'>{state.blogTitle}</b>. {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. {state.title}. <span>In</span>: {state.responsableBlog}. <b className='bold'>{state.blogTitle}</b>. {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 5 || state.auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. {upperSurName6}, {state.nameAuthor6}. {state.title}. <span>In</span>: {state.responsableBlog}. <b className='bold'>{state.blogTitle}</b>. {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
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
                        <p className='test'>{state.displayNameUser}. <b className='bold'>{state.socialMediaMensage}</b> [...]. {state.local}. {state.dayPublic} {state.monthPublic}. {state.yearPublic}. {state.userSocialMedia}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}. </p>
                    </div>

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

                </C.Container>
            )
        }
    }

    //REF 21 - livro
    if (state.refType2 === '21') {

        if (state.radioCheck === '1') {
            if (state.auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.edition}. ed. {state.local}: {state.publishingComp}, {state.yearPublic}. {state.paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. <b className='bold'>{state.title}</b>. {state.edition}. ed. {state.local}: {state.publishingComp}, {state.yearPublic}. {state.paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. <b className='bold'>{state.title}</b>. {state.edition}. ed. {state.local}: {state.publishingComp}, {state.yearPublic}. {state.paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. <b className='bold'>{state.title}</b>. {state.edition}. ed. {state.local}: {state.publishingComp}, {state.yearPublic}. {state.paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. <b className='bold'>{state.title}</b>. {state.edition}. ed. {state.local}: {state.publishingComp}, {state.yearPublic}. {state.paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 5 || state.auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. {upperSurName6}, {state.nameAuthor6}. <b className='bold'>{state.title}</b>. {state.edition}. ed. {state.local}: {state.publishingComp}, {state.yearPublic}. {state.paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
        }
    }

    //REF 22 - ebook
    if (state.refType2 === '22') {

        if (state.radioCheck === '1') {
            if (state.auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.subtitle}. {state.local}: {state.publishingComp}, {state.yearPublic}. <span className='italic'>E-book</span>. {state.paginationBook} p. {state.doiCheckbox} Disponível em: {state.url}</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. <b className='bold'>{state.title}</b>. {state.subtitle}. {state.local}: {state.publishingComp}, {state.yearPublic}. <span className='italic'>E-book</span>. {state.paginationBook} p. {state.doiCheckbox} Disponível em: {state.url}</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. <b className='bold'>{state.title}</b>. {state.subtitle}. {state.local}: {state.publishingComp}, {state.yearPublic}. <span className='italic'>E-book</span>. {state.paginationBook} p. {state.doiCheckbox} Disponível em: {state.url}</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. <b className='bold'>{state.title}</b>. {state.subtitle}. {state.local}: {state.publishingComp}, {state.yearPublic}. <span className='italic'>E-book</span>. {state.paginationBook} p. {state.doiCheckbox} Disponível em: {state.url}</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. <b className='bold'>{state.title}</b>. {state.subtitle}. {state.local}: {state.publishingComp}, {state.yearPublic}. <span className='italic'>E-book</span>. {state.paginationBook} p. {state.doiCheckbox} Disponível em: {state.url}</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 5 || state.auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. {upperSurName6}, {state.nameAuthor6}. <b className='bold'>{state.title}</b>. {state.subtitle}. {state.local}: {state.publishingComp}, {state.yearPublic}. <span className='italic'>E-book</span>. {state.paginationBook} p. {state.doiCheckbox} Disponível em: {state.url}</p>
                        </div>

                    </C.Container>
                )
            }
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
                        <p className='test'>{upperSurName1}, {state.nameAuthor1}. {state.title}. <b className='bold'>{state.magazine}</b>, {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}.</p>
                    </div>

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
                        <p className='test'>{upperSurName1}, {state.nameAuthor1}. {state.title}. [Entrevista concedida a] {state.nameAuthor2} {state.surAuthor2}. <b className='bold'>{state.magazine}</b>, {state.local}, n. {state.numberMagaz}, p. {state.paginationBook}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}.</p>
                    </div>

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
                        <p className='test'>{upperSurName1}, {state.nameAuthor1}. {state.title}. <b className='bold'>{state.magazine}</b>, {state.local}, n. {state.numberMagaz}, p. {state.paginationBook}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}.</p>
                    </div>

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
                        <p className='test'>{upperSurName1}, {state.nameAuthor1}. {state.title}. <b className='bold'>{state.magazine}</b>, {state.local}, {state.dayPublic} {state.monthPublic}. {state.yearPublic}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}</p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 51 - Tese
    if (state.refType2 === '51') {

        if (state.radioCheck === '1') {
            if (state.auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 5 || state.auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. {upperSurName6}, {state.nameAuthor6}.<b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
        }
    }

    //REF 52 - Dissertacao
    if (state.refType2 === '52') {

        if (state.radioCheck === '1') {
            if (state.auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Dissertação. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Dissertação. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Dissertação. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Dissertação. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>


                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Dissertação. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 5 || state.auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. {upperSurName6}, {state.nameAuthor6}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Dissertação. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
        }
    }

    //REF 53 - Tese na internet
    if (state.refType2 === '53') {

        if (state.radioCheck === '1') {
            if (state.auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 1) { 
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}.</p>
                        </div>

                    </C.Container>
                )
             }
            else if (state.auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}.</p>
                        </div>

                    </C.Container>
                )
             }
            else if (state.auxNewAuthor === 3) { 
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 4) { 
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (state.auxNewAuthor === 5 || state.auxNewAuthor > 5) { 
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {state.nameAuthor1}. {upperSurName2}, {state.nameAuthor2}. {upperSurName3}, {state.nameAuthor3}. {upperSurName4}, {state.nameAuthor4}. {upperSurName5}, {state.nameAuthor5}. {upperSurName6}, {state.nameAuthor6}. <b className='bold'>{state.title}</b>. {state.yearPublic}. {state.paginationBook} p. Tese. ({state.uniDegreed}) - {state.university}, {state.local}, {state.yearAcess}. Disponível em: {state.url}. Acesso em: {state.dayAcess} {state.monthAcess}. {state.yearAcess}.</p>
                        </div>

                    </C.Container>
                )
             }
        }
    }

    return formated;
}