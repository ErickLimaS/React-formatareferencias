import * as C from './styles';
import { Link } from 'react-router-dom'
import { Button, createStyles, Drawer, Group, Menu, MenuLabel } from '@mantine/core';
import { Referencias } from '../../pages/aboutAbnt/referencias';
import { ReactComponent as MenuSvg } from '../../img/menu-svg.svg'
import { useState } from 'react';

export const Header = () => {
    const Logo = require('./logo.png')
    const [opened, setOpened] = useState(false);

    //*<li><a href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">... as Margens</a></li>
    //<li><a href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Qual Fonte e Tamanho usar para ABNT?</a></li>
    //<li><a href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Como Fazer a Conclusão?</a></li>
    //<li><a href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Modelo Pronto de Trabalho ABNT!</a></li>

    return (
        <C.Container>
            <div className='divHeaderName'>
                <div>
                    <a href="/" className='headerName'>
                        <img src={Logo} alt="Logo do Site Referência em ABNT" className='imgLogo' />
                    </a>
                </div>
                <div>
                    <a href="/" className='headerName'>
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
                    <MenuSvg fill='#FFF' width={30} height={30} />
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