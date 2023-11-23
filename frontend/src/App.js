import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './users/Navbar';


const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>

        </BrowserRouter>
    );
};

export default App;
