import * as React from 'react';

const ThemeContext = React.createContext(true);
const ThemeUpdateContext = React.createContext(() => {});

export function useTheme() {
    return React.useContext(ThemeContext);
}

export function useUpdateTheme() {
    return React.useContext(ThemeUpdateContext);
}

export function ThemeProvider( {children} ) {

    const [dark, setDark] = React.useState(false);

    function toggleTheme() {
        setDark(!dark);
    }

    return (
        <ThemeContext.Provider value={dark}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}