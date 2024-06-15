"use client";
import React from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <button onClick={handleThemeChange} className="theme-toggler">
            {
                theme === 'dark' ? (
                <FontAwesomeIcon icon={faSun} className='w-5 h-5' />
                ) : (
                <FontAwesomeIcon icon={faMoon} className='w-5 h-5' />
                )
            }
        </button>
    );
}

