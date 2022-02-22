import styled from 'styled-components';

export const Container = styled.div`
    background-color: #02044A;
    color: #FFF;
    min-height: 100vh;

    
    
    .mainTitle{
        margin: 10px 0 15px 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #06086e;
        box-shadow: 0px 5px 2em 8px #000132;
        
        h1 {
            font-size: 48px;
        }

        p {
            margin-left: 100px;
            margin-right: 100px;
        }
        p:last-child {
            margin-left: 100px;
            margin-right: 100px;
            border-bottom: 1px solid #FFF;
        }
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
    border-right: 1px solid #16195C;
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
    
`;