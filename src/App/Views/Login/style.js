import styled from 'styled-components'

export const LoginContainer = styled.div`
    width: 350px;
    height: auto;
    margin: auto;
    margin-top: 30vh;
    padding: 1em;
    background-color: #fefefe;
    box-shadow: 1px, 1px, #000000;
`

export const LoginInput = styled.input`
    background: #d2d0d0;
    border-radius: 5px;
    border: solid;
    border-width: 1px;
    border-color: #a9a6a6;
    height: 35px;
    width: 100%;
    color: #1f1f1f;
    font-size: 24px;
    padding: 0em;
`

export const LoginInputLabel = styled.span`
    margin: auto;
    width: 90%;
    color: ${({ color }) => color};
`

export const LoginFormGroup = styled.div`
    width: 100%;
    height: auto;
    margin-top: 1em;
    margin-bottom: 1em;
`

export const LoginButton = styled.button`
    background-color: #3a6ea5;
    border: none;
    color: #fefefe;
    display: block;
    height: 3em;
    width: 100%;
    margin: auto;
    font-weight: bold;
    font-family: sans-serif;
`

export const LoginCheckmark = styled.input``
export const ForgotLink = styled.a``

export const FloatLeft = styled.div`
    float: left;
`

export const FloatRight = styled.div`
    float: right;
`
