import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbars from '../components/Navbars';
import PintarCards from '../components/PintarCards';
import Search from '../components/Search';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbars />
            <Routes>
                <Route path="/" element={<PintarCards />} />
                <Route path="/search" element={<Search />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;