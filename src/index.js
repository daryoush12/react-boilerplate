import ReactDOM from 'react-dom'
import React from 'react'
import App from './Views/index'
import { ThemeProvider } from 'styled-components'
import theme from './Config/theme'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
)
