"use client";
import React from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function ThemeToggler() {
    const { resolvedTheme, setTheme } = useTheme()
    const [hasMounted, setHasMounted] = React.useState(false);


    const label = resolvedTheme === 'dark' ? 'Activate light mode' : 'Activate dark mode'

    React.useEffect(() => {
        setHasMounted(true);
      }, []);

    if (!hasMounted) {
        return <FontAwesomeIcon icon={faMoon} className='w-5 h-5' />
    }

	const toggleTheme = () => {
		const newTheme = resolvedTheme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
	}

    return (
        <button onClick={toggleTheme} className="theme-toggler" aria-label={label} title={label}>
            { 
                resolvedTheme == 'light' ? (
                    <FontAwesomeIcon icon={faMoon} className='w-5 h-5' />
                ) : (
                    <FontAwesomeIcon icon={faSun} className='w-5 h-5' />
                )

            }
        </button>
    );
}

