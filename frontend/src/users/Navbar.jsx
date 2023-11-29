import React from 'react'
import NavbarLink from '../utils/NavbarLink'

const Navbar = () => {
    return (
        <nav className="font-sans fixed top-0 left-0 w-full z-50 ">
            <dev className=" bg-blue-500 h-16 flex items-center justify-between px-6">
                <input type="checkbox" id="check" className="hidden" />
                <label for="check" className="text-white text-4xl cursor-pointer lg:hidden">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="text-white text-4xl font-bold">Service Haealth Check</label>
                <ul className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-8">
                    <li><NavbarLink to="/">Home</NavbarLink></li>
                    <li><NavbarLink to="/">About</NavbarLink></li>
                    <li><NavbarLink to="/">Services</NavbarLink></li>
                    <li><NavbarLink to="/">Contact</NavbarLink></li>
                    <li><NavbarLink to="/">Feedback</NavbarLink></li>
                </ul>
            </dev>
        </nav>
    )
}

export default Navbar
