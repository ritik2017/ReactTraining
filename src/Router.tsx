import * as React from 'react';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contact';
import Blogs from './pages/Blogs';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='blogs' element={<Blogs/>}></Route>
                    <Route path='contacts' element={<Contacts/>}></Route>
                    {/* <Route path='*' element={<NoFound/>}></Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}