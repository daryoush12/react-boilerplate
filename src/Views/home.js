import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            Hello home <Link to="/about"> About</Link>
        </div>
    )
}
