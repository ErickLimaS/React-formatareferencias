import styled from 'styled-components';

export const Container = styled.div`
    background-color: #02044A;
    color: #FFF;
    min-height: 100vh;

    .divMainText {
        display: flex;
        align-items: center;
        background-color: #06086e;
        box-shadow: 0px 6px 2em 8px #000132;
        margin: 10px 0 15px 0;
        padding: 20px;

        .imgLogoxl {
            width: 420px;
            filter: blur(0px);
            margin: 0 20px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .mainText{
        margin: 10px 0 15px 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        h1 {
            font-size: 42px;
            font-weight: 500;
        }

        p {
            margin-left: 80px;
            margin-right: 80px;
            font-size: 20px;
        }
        p:last-child {
            margin-left: 80px;
            margin-right: 80px;
            text-decoration: underline solid #FFF;
        }
    }

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
    width: 250px;
    position: sticky; 
    top: 10px;
    height: 300px;
`;

export const Page = styled.div`
    border-left: 1px solid #16195C;
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
    
`;