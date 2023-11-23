import React from 'react'

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
                    <li><a className="text-white uppercase hover:bg-blue-700 px-3 py-2 rounded transition duration-300" href="/">Home</a></li>
                    <li><a className="text-white uppercase hover:bg-blue-700 px-3 py-2 rounded transition duration-300" href="/">About</a></li>
                    <li><a className="text-white uppercase hover:bg-blue-700 px-3 py-2 rounded transition duration-300" href="/">Services</a></li>
                    <li><a className="text-white uppercase hover:bg-blue-700 px-3 py-2 rounded transition duration-300" href="/">Contact</a></li>
                    <li><a className="text-white uppercase hover:bg-blue-700 px-3 py-2 rounded transition duration-300" href="/">Feedback</a></li>
                </ul>
            </dev>
        </nav>
    )
}

export default Navbar
