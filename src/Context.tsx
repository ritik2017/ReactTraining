import * as React from 'react';
import ClassChild from './ClassChild';

import FunChild from './FunChild';
import {ThemeProvider}  from './ThemeContext';

function Context() {

    return (
        <ThemeProvider>
            <FunChild></FunChild>
        </ThemeProvider>
    )
}

export default Context;