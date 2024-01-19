import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const preferDarkMode = window?.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [darkMode, setDarkMode] = useState( preferDarkMode || true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(prevMode => !prevMode)}>
            {darkMode ? <img src="/icons/moon.png" alt="moon" className='h-8 w-8' /> : <img src="/icons/cloudy.png" alt="sun" className='h-8 w-8' />}
        </button>
    );
};

export default ThemeToggle;
