import * as React from 'react';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    DUMMY: 'dummy'
}

function reducer(state: any, action: any) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { counter: state.counter+1 };
        case ACTIONS.DECREMENT: 
            return { counter: state.counter-1 };
        case ACTIONS.DUMMY: 
            return {counter: state.counter * 10, name: state.name + ' kumar'};
        default: 
            return state;
    }
}

export default function Reducer() {

    // const [count, setCount] = React.useState(0);
    const [state, dispatch] = React.useReducer(reducer, {counter: 0, name: 'ritik'});

    function increment() {
        dispatch({type: ACTIONS.INCREMENT});
    }

    function decrement() {
        dispatch({type: ACTIONS.DECREMENT});
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{state.counter}</span>
            <button onClick={increment}>+</button>
        </>
    )
} 