import * as React from "react";

import List from './List';

function Callback() {
    const [number, setNumber] = React.useState(1);
    const [dark, setDark] = React.useState(false);

    const themeStyle = {
            backgroundColor: dark ? 'black': 'white',
            color: dark ? 'white' : 'black'
    }

    const getItems = React.useCallback((increment) => {
        return [number+increment, number+1+increment, number+2+increment];
    }, [number]);

    return (
        <>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} ></input>
            <button onClick={() => setDark(!dark)} > Change Theme</button>
            <List getItems={getItems} ></List>
        </>
    )
}

export default Callback;