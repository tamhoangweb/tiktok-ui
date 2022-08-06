import React from 'react';
import Header from '../components/Header';

const HeaderOnly = ({ children }) => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </>
    );
};

export default HeaderOnly;
