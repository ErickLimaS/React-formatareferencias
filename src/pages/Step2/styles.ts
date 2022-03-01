import styled from "styled-components";
import { media } from "../../components/theme/media";

export const Container = styled.div`
    p {
        color: #FFF;

    }
    h1 {
        margin:0;
        padding: 0;
        font-size: 30px;

    }
    hr {
        height: 1px;
        border: 0;
        background-color: #FFF;
        margin: 30px 0 15px 0;
    }

    label {

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0; 
            font-size: 15px;
            background-color: #02044A;
        }
    }
    div small {
        color: #FFF;
    }

    button {
        background-color: #00c144;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
        padding: 10px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
    
    .backButton{
        font-size: 16px;
        text-decoration: none;
        padding: 10px 40px;
        color: #B8B8D4;
        margin: 20px 10px;
    }

    div.buttons{
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: baseline;
        margin-bottom: 25px;
    }

    div.buttons > * {
        border-radius: 30px;
        border: 1px solid #FFF;
    }

    select {
        outline: 0;
    }
    
    ${media.greaterThan('sm')`
        div.buttons {
            flex-direction: row;
        }
        
        .backButton {
            margin: 0 30px;
        }

    `}
    
    ${media.greaterThan('md')`
    


    `}

`;