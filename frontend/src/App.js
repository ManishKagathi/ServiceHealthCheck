import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './users/Navbar';
import ServiceApis from './Pages/ServiceApis';



const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/services/:serviceName' element={<ServiceApis />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
