import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px 30px;
    cursos: pointer;
    
    a {
        display: flex;
        align-item: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const IconArea = styled.div<{ active: boolean; }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
    filter:  ${props => props.active ? 'blur(0px)' : 'blur(1px)'};
    display: flex;
    justify-content: center;
    
`;

export const Title = styled.div <{ active: boolean; }>`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size:15px;
    color: ${props => props.active ? '#FFF' : '#494A7C'};
`;

export const Description = styled.div <{ active: boolean; }>`
    text-align: right;
    font-size: 13px;
    color: ${props => props.active ? '#B8B8D4' : '#494A7C'};
`;
export const Point = styled.div <{ active: boolean; }>`
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#25CD89' : '#02044A'};
`;