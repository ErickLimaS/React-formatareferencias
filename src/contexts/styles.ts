import styled from 'styled-components'

export const Container = styled.div`

    label {
        font-size: 20px;
        color: #FFF;
        margin: 25px 20px 10px 20px;
    }

    h1 {
        font-size: 20px;
        color: #FFF;
        margin: 25px 20px 10px 20px;
    }

    .radioCheck {
        display: flex;
        flex-direction: column;

        div {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            border-radius: 4px;
            background-color: #1e1e7c;
            padding-bottom: 10px;
        }

        h2 {
            font-weight: 500;
            font-size: 20px;
            color: #FFF;
            margin: 25px 20px 10px 20px;
        }
    }

    .checkboxEtAl {
        display: flex;
        flex-direction: column;

        h1 {
            font-weight: 500;
            font-size: 20px;
        }

        small {
            color: #868E96;
            font-size: 12px;
        }

        div {
            margin: 10px 0 0 0;
            padding: 5px 0;
            background-color: #1e1e7c;
            border-radius: 4px;

            input {
                margin: 16px;
            }

            label {
                margin-left: 0;
                font-weight: 100;
                font-size: 18px;
            }
        }
    }

    input {
        font-size: 16px
    }

    .datePublic label, .dateVisualization label {
        display: flex;
        align-item: center;
        margin: 15px 0 5px 0;
        font-weight: 500;
    }

    .datePublic, .dateVisualization{
        align-items: flex-end;
        background-color: #1e1e7c;
    }

    .datePublic {
        margin: 10px 0 15px 0;
        border-radius: 4px;
    }

    .datePublic .mantine-Text-root {
        padding: 10px 5px;
    }

    .dateVisualization .mantine-Text-root {
        padding: 10px 5px;
    }
    
    .dateVisualization {
        margin: 15px 0 10px 0;
        border-radius: 4px;
    }

    hr {
        margin: 20px 0 5px 0;
    }
    .divSelect {
        display: flex;
        flex-direction: column;
    }
    .divSelect {
        font-weight: 700;
    }
    .mainDivSelect {
        margin-bottom: -5px;
    }
    .divSelect small{
        font-size: 12px;
        font-weight: 400;
        color: #688e96!important;
        padding: 20px 5px 20px 5px;
    }
    .divSelect select {

        border: 1px solid #ced4da;
        background-color: #fff;
        -webkit-transition: border-color 100ms ease;
        transition: border-color 100ms ease;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        height: 36px;
        -webkit-tap-highlight-color: transparent;
        line-height: 34px;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        resize: none;
        box-sizing: border-box;
        font-size: 14px;
        width: 100%;
        color: #000;
        display: block;
        text-align: left;
        min-height: 36px;
        padding-left: 12px;
        padding-right: 12px;
        border-radius: 4px;
    }
    select {
        border: 1px solid #ced4da;
    }

    .buttonNewAuthor {
        display: flex;
        justify-content: flex-end;
        
        button {
            font-size: 16px;
            font-weight: 500;
            background-color: #1c8d00;
        }
    }

`;