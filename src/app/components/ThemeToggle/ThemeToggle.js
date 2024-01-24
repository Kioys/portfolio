import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const osPrefersDark = window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)')?.matches;
        const userPrefersDark = localStorage.getItem('theme') === 'dark';
        return userPrefersDark || osPrefersDark;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <button onClick={toggleTheme}>
            {darkMode ? <img src="/icons/moon.png" alt="moon" className='h-8 w-8' /> : <img src="/icons/cloudy.png" alt="sun" className='h-8 w-8' />}
        </button>
    );
};

export default ThemeToggle;
