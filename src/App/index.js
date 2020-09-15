import { Component } from 'react'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LayoutRoute from '../Components/LayoutRoute/LayoutRoute'
import Default from './Layouts/Default'

import Main from './Views/Main/Main'
import About from './Views/About/About'

function App() {
    return (
        <Router>
            <Switch>
                <LayoutRoute exact path="/" component={Main} Layout={Default} />
                <LayoutRoute path="/about" component={About} Layout={Default} />
            </Switch>
        </Router>
    )
}

export default App
