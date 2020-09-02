import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/core/styles'

export default function Default({ children }) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">News</Typography>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {children}
            <div>Footer of Main</div>
        </div>
    )
}
