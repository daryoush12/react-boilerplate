import React from 'react'

export default function Default({ children }) {
    return (
        <div>
            <div>Header Of Main</div>
            {children}
            <div>Footer of Main</div>
        </div>
    )
}
