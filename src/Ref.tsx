import * as React from 'react';

export default function Ref() {
    const [name, setName] = React.useState(''); 
    let count = React.useRef(1);
    let inputRef = React.useRef();

    console.log('Hello');

    React.useEffect(() => {
        count.current = count.current + 1;
    }, [name]) 

    React.useEffect(() => {
        console.log('Hello from ref');
    }, [count.current]);

    function focus() {
        inputRef.current.value = "ritik";
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={(event) => setName(event.target.value)}></input>
            <div>My name is {name}</div>
            <div>The component rerendered {count.current} times</div>
            <button onClick={focus}>Focus</button>
        </>
    )
}
