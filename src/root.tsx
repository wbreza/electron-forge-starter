import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import Navbar from './navbar';
import MainContent from './mainContext';

const Root = () => {
    return (
        <>
            <Router>
                <Navbar />
                <MainContent />
            </Router>
        </>
    );
}

export default Root