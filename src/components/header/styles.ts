import styled from 'styled-components';

export const Container = styled.div`
    background-color: #00008d ;
    padding: 0px 15px;
    border-bottom: 1px solid #16195C;
    display:flex; 
    justify-content: space-between;
    align-items: center;

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
`;