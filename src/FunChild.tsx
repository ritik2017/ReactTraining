import * as React from 'react';

import { useTheme, useUpdateTheme } from './ThemeContext';

function FunChild() {
    const dark = useTheme();
    const toggleTheme = useUpdateTheme();
    const themeStyles = React.useMemo(() => {
        return {
            background: dark ? 'black' : 'white',
            color: dark ? 'white': 'black',
            padding: '2rem',
            margin: '2rem'
        }
    }, [dark]);
    return (
        <>
            <button onClick={toggleTheme} >Change Theme</button>
            <div style={themeStyles}>Functional Child Component</div>
        </>
    )
}

export default FunChild;