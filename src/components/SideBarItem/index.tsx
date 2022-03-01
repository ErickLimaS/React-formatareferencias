import * as C from './styles';
import { Link } from 'react-router-dom'
import { ReactComponent as NumberOne } from '../../img/one.svg'
import { ReactComponent as NumberTwo } from '../../img/two.svg'
import { ReactComponent as NumberThree } from '../../img/three.svg'

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
                    {icon === 'one' &&
                        <NumberOne fill='#56B48C' width='50' height='50' />
                    }
                    {icon === 'two' &&
                        <NumberTwo fill='#56B48C' width='50' height='50' />
                    }
                    {icon === 'three' &&
                        <NumberThree fill='#56B48C' width='50' height='50' />
                    }
                </C.IconArea>
            </Link>
        </C.Container>
    )
}  