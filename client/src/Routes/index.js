import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Student from '../pages/Student';
import MintStudent from '../pages/MintStudent';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<About />} />
        </Routes>
    )
}

export function StudentRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Student />} />
        </Routes>
    )
}

export function MintRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MintStudent />} />
        </Routes>
    )
}
