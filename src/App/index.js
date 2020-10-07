import { Component } from 'react'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LayoutRoute from '../Components/LayoutRoute/LayoutRoute'
import Default from './Layouts/Default'
import Empty from './Layouts/Empty'

import Main from './Views/Main/Main'
import About from './Views/About/About'
import Login from './Views/Login/Login'

function App() {
    return (
        <Router>
            <Switch>
                <LayoutRoute
                    exact
                    path="/asd"
                    component={Main}
                    Layout={Default}
                />
                <LayoutRoute path="/about" component={About} Layout={Default} />
                <LayoutRoute path="/" component={Login} Layout={Empty} />
            </Switch>
        </Router>
    )
}

export default App
