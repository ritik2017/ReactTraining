import * as React from 'react';

// function Memo() {

//     const [number, setNumber] = React.useState(0);
//     const [dark, setDark] = React.useState(false);

//     const doubleNumber = React.useMemo(() => fun(number), [number]);

//     function createTheme() {
//         console.log('Create theme')
//         return {
//             backgroundColor: dark ? 'black': 'white',
//             color: dark ? 'white' : 'black'
//         }
//     }

//     const themeStyle = React.useMemo(() => createTheme(), [dark]); 

//     return (
//         <>
//             <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} ></input>
//             <button onClick={() => setDark(!dark)} > Change Theme</button>
//             <div style={themeStyle} >{doubleNumber}</div>
//         </>
//     )
// }


function Memo() {

    const [number, setNumber] = React.useState(0);
    const [dark, setDark] = React.useState(false);

    const doubleNumber = React.useMemo(() => fun(number), [number]);

    const themeStyle = React.useMemo(() => {    
        return {
            backgroundColor: dark ? 'black': 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark]);

    React.useEffect(() => {
        console.log('Changed theme style');
    }, [themeStyle])

    return (
        <>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} ></input>
            <button onClick={() => setDark(!dark)} > Change Theme</button>
            <div style={themeStyle} >{doubleNumber}</div>
        </>
    )
}

function fun(num: number) {
    console.log('Inside fun');
    for(let i=0; i<=10000000;i++) {}
    return num*2;
} 

export default Memo;