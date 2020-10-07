import React from 'react'
import {
    LoginContainer,
    LoginInput,
    LoginInputLabel,
    LoginFormGroup,
    LoginButton,
    FloatLeft,
    FloatRight,
} from './style'

export default function Login() {
    return (
        <LoginContainer>
            <LoginFormGroup>
                <LoginInputLabel>Username</LoginInputLabel>
                <LoginInput type="text" />
            </LoginFormGroup>
            <LoginFormGroup>
                <LoginInputLabel>Password</LoginInputLabel>
                <LoginInput type="password" />
            </LoginFormGroup>
            <LoginButton>Login</LoginButton>
            <LoginFormGroup style={{ paddingTop: '0.5em' }}>
                <FloatLeft>
                    <input type="checkbox" />
                    <label>Remember me</label>
                </FloatLeft>
                <FloatRight>
                    <a href="https:/google.com">Forgot your password?</a>
                </FloatRight>
            </LoginFormGroup>
        </LoginContainer>
    )
}
