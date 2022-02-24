import styled from 'styled-components';

export const Container = styled.div`
        background-color: #000076;
        display: flex;
        flex-direction: column;
        box-shadow: 0px -2px 2em 0px #000132;
        text-decoration: none;

        p {
            font-size: 16px;
            margin: 0 0 0 0px;
        }

        a {
            text-decoration: none;
            font-size: 17px;
            margin: 10px 0px;
            color: #cdcdcd;

            &:hover{
            color: #FFF;
            -webkit-transition: all 0.1s ease-in-out;
            -ms-transition: all 0.1s ease-in-out;
            -moz-transition: all 0.1s ease-in-out;
            -o-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
            text-decoration: underline;
            }
        }

        ul {
            list-style-type: none;
        }
        
        small {
            display: flex;
            background-color: inherit;
            color: #c3c3c3;
            justify-content: center;
        }
`;