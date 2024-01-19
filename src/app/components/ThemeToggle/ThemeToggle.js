import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [firstTime, setFirstTime] = useState(true);

    useEffect(() => {
        if (firstTime) {
            const preferDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(preferDarkMode);
            setFirstTime(false);
        }
        else {
            if (darkMode) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        }

    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(prevMode => !prevMode)}>
            {darkMode ? <img src="/icons/moon.png" alt="moon" className='h-8 w-8' /> : <img src="/icons/cloudy.png" alt="sun" className='h-8 w-8' />}
        </button>
    );
};

export default ThemeToggle;
