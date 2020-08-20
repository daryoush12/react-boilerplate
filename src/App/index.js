import { Component } from 'react'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LayoutRoute from '../Components/LayoutRoute'
import Main from './Views/Main'
import Default from './Layouts/Default'

function App() {
    return (
        <Router>
            <Switch>
                <LayoutRoute exact path="/" component={Main} Layout={Default} />
            </Switch>
        </Router>
    )
}

export default App
