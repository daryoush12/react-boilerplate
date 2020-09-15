import React from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Main() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)',
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <div>
            <h1>Device Test!</h1>
            {isDesktopOrLaptop && <p>I am desktop or laptop</p>}
            {isTabletOrMobile && <p>I am probably tablet or mobile</p>}
        </div>
    )
}
