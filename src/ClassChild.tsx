import * as React from 'react';

import { ThemeContext } from './Context';

export default class ClassChild extends React.Component {

    themeStyles = (dark: boolean) => {
        return {
            background: dark ? 'black' : 'white',
            color: dark ? 'white': 'black',
            padding: '2rem',
            margin: '2rem'
        }
    };

    render() {
        return (
            <ThemeContext.Consumer>
                {dark => {
                    console.log(dark);
                    return <div style={this.themeStyles(dark)}>Class Child Component</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}