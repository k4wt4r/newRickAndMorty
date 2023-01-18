import React, {  createContext, useContext, useState } from 'react';

interface ThemeContextProps {
    theme: 'light' | 'dark'| string;
    toggleTheme: () => void;
}

type Props ={
    children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => { }
});

export const ThemeProvider= (
  {children} : Props
) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
     const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

    return (
        <ThemeContext.Provider value={
            { theme ,  toggleTheme
            }
        }>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
