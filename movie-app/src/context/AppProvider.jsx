import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
    const [navToggle, setNavToggle] = useState(false);
    const [isMouseEnter, setIsMouseEnter] = useState(false)

    const handleNavToggle = () => {
        setNavToggle((prev) => !prev)
    }

    return (
        <AppContext.Provider value={{ navToggle, handleNavToggle, isMouseEnter, setIsMouseEnter }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;

