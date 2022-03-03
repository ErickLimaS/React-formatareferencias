import * as C from './styles';
import { Link } from 'react-router-dom'
import { Button, createStyles, Menu, MenuLabel } from '@mantine/core';
import { Referencias } from '../../pages/aboutAbnt/referencias';
import { ReactComponent as MenuSvg } from '../../img/menu-svg.svg'

export const Header = () => {
    const Logo = require('./logo.png')

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

            <div className='divMenuMobile'>
                <Menu className='menuMobile' control={<MenuSvg fill='#FFF' width={30} height={30} />} placement="start" gutter={18} withArrow size="lg">
                    <Menu.Label>Como Fazer...</Menu.Label>
                    <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">... as Referências Bibliográficas</Menu.Item>
                    <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">... as Margens</Menu.Item>
                    <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Qual Fonte e Tamanho usa Para ABNT?</Menu.Item>
                    <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Como Fazer a Conclusão?</Menu.Item>
                    <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Como Fazer a Introdução?</Menu.Item>
                    <Menu.Item component='a' href='/abnt/como-fazer-referencias-bibliograficas-em-abnt' target="_blank">Modelo Pronto de Trabalho ABNT!</Menu.Item>
                </Menu>
            </div>



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