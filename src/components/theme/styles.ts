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
        backgroundImage: 'url(/logoxl.png)';
        backgroundPosition: 'center';
        backgroundSize: 'cover';
        backgroundRepeat: 'no-repeat';

        .imgLogoxl {
            width: 280px;
            filter: blur(8px);
            margin: 0 20px;
            margin-top: -10000px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 0;
        }
    }

    .mainText{
        margin: 10px 0 15px 0;
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        background-color: #00000055;
        border-radius: 4px;

        p {
            font-size: 16px;
        }

        #p2 {
            display: none;
        }
        
      }

        .buttonAMainText {
            text-decoration: none;
            background-color: #455da0;
            padding: 15px;
            margin: 25px 0 0 0;
            border: 1px solid #FFF;
            border-radius: 4px;
            color: #FFF;
            font-size: 16px;
            font-weight: 600;
            font-family: "Nunito Sans", sans-serif;
            transition: all 0.2s ease-out;

            :hover {
                transform: scale(1.05);
                background-color: #3351a5;
            }
        }
        
        h1 {
            font-size: 30px;
            font-weight: 500;
            width: 280px;
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

        #disapearP {
            padding: 10px;
            text-decoration: none;
            border-radius: 4px;
            box-shadow: inset 0px 0px 3em 10px #000132;
        }
    }
    ${media.greaterThan('sm')`
        #disapearP{
            display: none;
        }

        .mainText{
            padding: 20px;
            #p2 {
                display: block;
                text-decoration: underline;
            }
            
        }

        .mainText
            #p1{
                display: block;
            }
            
        }
    `}

    ${media.greaterThan('md')`
        #disapearP{
            display: none;
        }

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
            
            .mainText {
                z-index: 0;
                background-color: unset;
                border-radius: 0px;
            }

            .imgLogoxl {
                width: 320px;
                z-index: 1;
                margin-top: 0;
                filter: blur(0px);
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
            font-family: "Nunito Sans", sans-serif;
            
            h1 {
                font-size: 42px;
                font-weight: 500;
                width: 500px;
                margin-left: -100px;
                
                margin-top: 0px;
            }

            p {
                margin-left: 80px;
                margin-right: 80px;
                font-size: 20px;
                font-weight: 100;
                margin-top: 10px;
                margin-bottom: 10px;
                width: 600px;
            }
            p:last-child {
                margin-left: 80px;
                margin-right: 80px;
                text-decoration: underline solid #FFF;
                margin-top: 10px;
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