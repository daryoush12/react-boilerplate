import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Default({ children }) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)',
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            {isDesktopOrLaptop && <div>Desktop</div>}
            {isTabletOrMobile && (
                <>
                    <div>Mobile</div>
                </>
            )}

            {children}
            <div>Footer of Main</div>
        </div>
    )
}
