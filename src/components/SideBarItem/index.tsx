import * as C from './styles';
import { Link } from 'react-router-dom'

type Props = {
    title: string,
    description: string,
    path: string,
    icon: string,
    active: boolean
}
export const SideBarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title active={active}>{title}</C.Title>
                    <C.Description active={active}>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>

                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}  