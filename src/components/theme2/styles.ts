import styled from 'styled-components';

export const Container = styled.div`
    background-color: #02044A;
    color: #FFF;
    min-height: 100vh;

`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

`;

export const Steps = styled.div`
    flex: 1;
    display: flex;

`;

export const Sidebar = styled.div`
    width: 180px;
    border-right: 1px solid #16195C;

    div {
        padding-right: 10px;
        margin: 80% 0px;
    text-decoration: none;
    }

    div h2{
        font-size: 14px;
        margin: 15px 0px;
        color: #FFF;
        font-weight: 400;
        text-decoration: underline;

        &:hover {
            color: #afafaf;
        }
    }
    
    
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
    
`;