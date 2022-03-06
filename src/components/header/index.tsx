import * as C from './styles';
import { useNavigate } from 'react-router-dom'
import { Button, Drawer, Group, Menu } from '@mantine/core';
import { ReactComponent as MenuSvg } from '../../img/menu-svg.svg'
import { useState } from 'react';
import { FormActions, useForm } from '../../contexts/FormContext';

export const Header = () => {
    const Logo = require('./logo.png')
    const [opened, setOpened] = useState(false);
    const {state, dispatch} = useForm();
    const navigate = useNavigate();

    //*<li><a href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">... as Margens</a></li>
    //<li><a href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Qual Fonte e Tamanho usar para ABNT?</a></li>
    //<li><a href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Como Fazer a Conclusão?</a></li>
    //<li><a href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Modelo Pronto de Trabalho ABNT!</a></li>

    const refreshToStep1 = () => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 0
        });
        dispatch({
            type: FormActions.setSurAuthor1,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor1,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor2,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor2,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor3,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor3,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor4,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor4,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor5,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor5,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor6,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor6,
            payload: ''
        });
        dispatch({
            type: FormActions.setEtAlCheckbox,
            payload: ''
        });
        dispatch({
            type: FormActions.setTitle,
            payload: ''
        });
        dispatch({
            type: FormActions.setSubtitle,
            payload: ''
        });
        dispatch({
            type: FormActions.setUrl,
            payload: ''
        });
        dispatch({
            type: FormActions.setLocal,
            payload: '[S.I.]'
        });
        dispatch({
            type: FormActions.setDayAcess,
            payload: 0
        });
        dispatch({
            type: FormActions.setMonthAcess,
            payload: ''
        });
        dispatch({
            type: FormActions.setYearAcess,
            payload: 0
        });
        dispatch({
            type: FormActions.setDayPublic,
            payload: 0
        });
        dispatch({
            type: FormActions.setMonthPublic,
            payload: ''
        });
        dispatch({
            type: FormActions.setYearPublic,
            payload: 0
        });
        dispatch({
            type: FormActions.setPlacePublic,
            payload: '[S.I.]'
        });
        dispatch({
            type: FormActions.setPublishingComp,
            payload: '[s.n.]'
        });
        dispatch({
            type: FormActions.setNoDate,
            payload: 's.d.'
        });
        dispatch({
            type: FormActions.setEdition,
            payload: ''
        });
        dispatch({
            type: FormActions.setRadioCheck,
            payload: '1'
        });
        dispatch({
            type: FormActions.setCompanyName,
            payload: ''
        });
        dispatch({
            type: FormActions.setResponsableBlog,
            payload: ''
        });
        dispatch({
            type: FormActions.setBlogTitle,
            payload: ''
        });
        dispatch({
            type: FormActions.setNamePodcastEpisode,
            payload: ''
        });
        dispatch({
            type: FormActions.setNamePodcast,
            payload: ''
        });
        dispatch({
            type: FormActions.setPodcastAnnouncer,
            payload: ''
        });
        dispatch({
            type: FormActions.setUserSocialMedia,
            payload: ''
        });
        dispatch({
            type: FormActions.setDisplayNameUser,
            payload: ''
        });
        dispatch({
            type: FormActions.setSocialMediaMensage,
            payload: ''
        });
        dispatch({
            type: FormActions.setRemetenteName,
            payload: ''
        });
        dispatch({
            type: FormActions.setEmailSubject,
            payload: ''
        });
        dispatch({
            type: FormActions.setDestinatario,
            payload: ''
        });
        dispatch({
            type: FormActions.setPaginationBook,
            payload: ''
        });
        dispatch({
            type: FormActions.setEditionBook,
            payload: ''
        });
        dispatch({
            type: FormActions.setDoiCheckbox,
            payload: '0'
        });
        dispatch({
            type: FormActions.setDurationVideo,
            payload: ''
        });
        dispatch({
            type: FormActions.setUniDegreed,
            payload: ''
        });
        dispatch({
            type: FormActions.setUniversity,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameGuest,
            payload: ''
        });
        dispatch({
            type: FormActions.setMagazine,
            payload: ''
        });
        dispatch({
            type: FormActions.setNumberMagaz,
            payload: ''
        });
        dispatch({
            type: FormActions.setAuxNewAuthor,
            payload: 0
        });
        navigate('/');

    };

    return (
        <C.Container>
            <div className='divHeaderName'>
                <div>
                    <a href="/" className='headerName' onClick={refreshToStep1}>
                        <img src={Logo} alt="Logo do Site Referência em ABNT" className='imgLogo' />
                    </a>
                </div>
                <div>
                    <a href="/" className='headerName' onClick={refreshToStep1}>
                        Referência em ABNT
                    </a>
                </div>


            </div>

            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title=""
                padding="xl"
                size="xl"
                styles={{
                    root: { color: 'black' },
                    overlay: { color: 'red' },
                    drawer: { color: 'black', backgroundColor: '#d9d9ff', fontSize: '22px', span: { fontSize: '40px', marginBottom: '90px' }, ul: { padding: '0', margin: '60px 0' }, li: { listStyle: 'none', margin: '40px 0', borderBottom: '1px solid #000', width: 'auto' }, a: { textDecoration: 'none', color: '#000' } },
                    header: { color: 'black' },
                    title: { color: 'black' },
                    closeButton: { color: 'red' },
                }}
                closeButtonLabel="Fechar aba"
                aria-labelledby="drawer-titulo"
                aria-describedby="drawer-body"
            >
                <span className='spanMobileMenu' id='drawer-titulo'>Como Fazer...</span>
                <ul id='drawer-body'>
                    <li><a href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">... as Referências Bibliográficas</a></li>

                </ul>
            </Drawer>

            <Group position="center">
                <Button className='buttonMobile' onClick={() => setOpened(true)}>
                    <MenuSvg fill='#FFF' width={25} height={25} />
                </Button>
            </Group>

            <Menu className='menuDesktop' control={<Button>Como Fazer em ABNT ...</Button>} placement="center" gutter={8} withArrow size="lg">
                <Menu.Label>Como Fazer...</Menu.Label>
                <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">... as Referências Bibliográficas</Menu.Item>
                <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">... as Margens</Menu.Item>
                <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Qual Fonte e Tamanho usa Para ABNT?</Menu.Item>
                <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Como Fazer a Conclusão?</Menu.Item>
                <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Como Fazer a Introdução?</Menu.Item>
                <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Modelo Pronto de Trabalho ABNT!</Menu.Item>
            </Menu>

        </C.Container>
    );
}