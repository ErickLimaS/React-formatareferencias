import styled from 'styled-components';
import { media } from '../../components/theme/media'

export const Container = styled.div<{ bgColor: string }>`

    background-color: #02044A;
    color: #FFF;
    min-height: 100vh;

    .divMainText {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #06086e;
        box-shadow: 0px 6px 2em 8px #000132;
        margin: 10px 0 15px 0;
        padding: 20px;

        .imgLogoxl {
            width: 320px;
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
        
      }
        
        h1 {
            font-size: 30px;
            font-weight: 500;
        }

        p {
            margin-left: 10px;
            margin-right: 10px;
            font-size: 20px;
        }
        p:last-child {
            margin-left: 10px;
            margin-right: 10px;
            text-decoration: underline solid #FFF;
        }
    }

    ${media.greaterThan('md')`

    `}
    ${media.greaterThan('lg')`
        .divMainText {
            flex-direction: row;

            h1 {
                font-size: 32px;
            }

            p {
                margin-left: 40px;
                margin-right: 40px;

            }
        }

    `}
    ${media.greaterThan('xl')`

        background-color: #02044A;
        color: #FFF;
        min-height: 100vh;

        .divMainText {
            display: flex;
            align-items: center;
            flex-direction: row;
            background-color: #06086e;
            box-shadow: 0px 6px 2em 8px #000132;
            margin: 10px 0 15px 0;
            padding: 20px;
            min-width: 100vh;

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

    `}
    
    ${media.greaterThan('xxl')` 
        .divMainText {
            justify-content: center;

            h1 {
                font-size: 52px;
            }

            p {
                width: 1200px;
                font-size: 28px;
            }

            .imgLogoxl {
                width: 500px;
            }
        }

    `}

`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    ${media.greaterThan('sm')` `}
    ${media.greaterThan('md')` `}
    ${media.greaterThan('xl')` 
        margin: auto;
        max-width: 980px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;    

    `}

    ${media.greaterThan('xxl')` 
        h1 {
            font-size: 46px;
        }    

        p {
            font-size: 36px;
        }

        label, button, div.mantine-TextInput-description {
            font-size: 32px;
        }

        .mantine-Text-root, .mantine-TextInput-description, .mantine-pb0o5j{
            font-size: 32px;
        }

        max-width: 1580px;
    `}

    
`;

export const Steps = styled.div`
        flex: 1;
        display: block;

    ${media.greaterThan('xs')`
        
    `}

    ${media.greaterThan('md')`
    `}

    ${media.greaterThan('xl')`
        display: flex;
    `}

    ${media.greaterThan('xxl')`
        
    `}

`;

export const Sidebar = styled.div`
    top: 10px;
    display: none;


    ${media.greaterThan('xs')` 
        display: flex;
        background-color: #000028;
        overflow: auto;
    `}
    
    ${media.greaterThan('sm')`
        display: flex;

    `}

    ${media.greaterThan('md')` 
        display: flex;
    `}

    ${media.greaterThan('xl')`
        background-color: unset;
        display: block;
        width: 250px;
        position: sticky; 
        top: 10px;
        height: 300px;
    
    `}
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 20px;
    padding-top: 40px;
    padding-right: 20px;

    ${media.greaterThan('xs')` 
        margin-top: 40px;

    `}
    
    ${media.greaterThan('md')` `}

    ${media.greaterThan('xl')` 
    
        border-left: 1px solid #16195C;
        flex: 1;
        padding-left: 40px;
        padding-top: 40px;
        padding-right: 0px;
    `}
    ${media.greaterThan('xxl')` `}
    
`;