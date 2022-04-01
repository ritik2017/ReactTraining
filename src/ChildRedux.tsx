import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ChildRedux() {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log('Hello from child redux');

    return (
        <>
            { auth && <p>Hello World</p> }
            <button onClick={() => dispatch({type: "LOG_IN"})}>Login</button>
            <button onClick={() => dispatch({type: "LOG_OUT"})}>Logout</button>
        </>
    )
}
