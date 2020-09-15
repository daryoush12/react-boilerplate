import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

export default function Default({ children }) {
    const [isOpen, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)',
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            {isDesktopOrLaptop && (
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">About</Button>
                    </Toolbar>
                </AppBar>
            )}
            {isTabletOrMobile && (
                <>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="persistent" anchor="left" open={open}>
                        <div>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                    </Drawer>
                </>
            )}

            {children}
            <div>Footer of Main</div>
        </div>
    )
}
