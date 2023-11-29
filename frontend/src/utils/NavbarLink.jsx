import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarLink({ to, children }) {
    return (
        <Link
            className="text-white uppercase hover:bg-blue-700 px-3 py-2
             rounded transition duration-300"
            to={to}>
            {children}
        </Link>
    )
}
