import styled from 'styled-components';
import { media } from '../theme/media';

export const Container = styled.div`

    background-color: #00008d ;
    padding: 0px 15px;
    border-bottom: 1px solid #16195C;
    display:flex; 
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .divHeaderName {
        display: flex;
    }

    .headerName {
        font-size: 24px;
        color: #FFF;
        display: flex;
        justify-content: center;
        margin: 20px 5px 10px 5px;
    }


    ul {
        display: flex;
        padding: 0px;
    }

    li {
        list-style: none;
        padding: 10px 0;
        margin: 0px 10px;
        border-bottom: 1px solid rgb(188, 217, 236);
        font-size: 20px;

        &:hover{
            transform: scale(1.05, 1.05);
            -webkit-transition: all 0.1s ease-in-out;
            -ms-transition: all 0.1s ease-in-out;
            -moz-transition: all 0.1s ease-in-out;
            -o-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
        }
    }

    li a, .headerName{
        text-decoration: none;
    }

    li a{
        color: #FFF ;

        &:hover{
            color: #B8B8D4;
            -webkit-transition: all 0.1s ease-in-out;
            -ms-transition: all 0.1s ease-in-out;
            -moz-transition: all 0.1s ease-in-out;
            -o-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
        }
    }

    .imgLogo {
        width: 40px;
    }

    ${media.greaterThan('sm')``};

    ${media.greaterThan('md')`
        flex-direction: row;
        
        li  {
            font-size: 17px;
        }
    `};

    ${media.greaterThan('xl')`
        background-color: #00008d ;
        padding: 0px 15px;
        border-bottom: 1px solid #16195C;
        display:flex; 
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        a {
        font-size: 17px;
        }

        .divHeaderName {
            display: flex;
        }

        .headerName {
            font-size: 28px;
            color: #FFF;
            display: flex;
            justify-content: center;
            margin: 0 5px;
        }


        ul {
            display: flex;
        }

        li {
            list-style: none;
            padding: 10px;
            margin: 0px 15px;
            border-bottom: 1px solid rgb(188, 217, 236);
            font-size: 20px;

            &:hover{
                transform: scale(1.05, 1.05);
                -webkit-transition: all 0.1s ease-in-out;
                -ms-transition: all 0.1s ease-in-out;
                -moz-transition: all 0.1s ease-in-out;
                -o-transition: all 0.1s ease-in-out;
                transition: all 0.1s ease-in-out;
            }
        }

        li a, .headerName{
            text-decoration: none;
        }

        li a{
            color: #FFF ;

            &:hover{
                color: #B8B8D4;
                -webkit-transition: all 0.1s ease-in-out;
                -ms-transition: all 0.1s ease-in-out;
                -moz-transition: all 0.1s ease-in-out;
                -o-transition: all 0.1s ease-in-out;
                transition: all 0.1s ease-in-out;
            }
        }

        .imgLogo {
            width: 40px;
        }
    `}

    ${media.greaterThan('xxl')`
        .headerName {
            font-size: 32px;
        }
        
        ul li {
            font-size: 24px;
        }
        
    `};
`;