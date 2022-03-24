import * as React from 'react';

// const ACTIONS = {
//     INCREMENT: 'increment',
//     DECREMENT: 'decrement',
//     DUMMY: 'dummy'
// }

// function reducer(state: any, action: any) {
//     switch (action.type) {
//         case ACTIONS.INCREMENT:
//             return { counter: state.counter+1 };
//         case ACTIONS.DECREMENT: 
//             return { counter: state.counter-1 };
//         case ACTIONS.DUMMY: 
//             return {counter: state.counter * 10, name: state.name + ' kumar'};
//         default: 
//             return state;
//     }
// }

// export default function Reducer() {

//     // const [count, setCount] = React.useState({counter: 0, name: ''});
//     const [state, dispatch] = React.useReducer(reducer, {counter: 0, name: 'ritik'});

//     return (
//         <>
//             <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
//             <span>{state.counter}</span>
//             <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
//         </>
//     )
// } 

const ACTIONS = {
    ADD_TODO: 'add_todo',
    DELETE_TODO: 'delete_todo',
    COMPLETE_TODO: 'complete_todo'
}

function reducer(todos: any, action: any) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.DELETE_TODO:
            return todos.filter( todo => todo.id !== action.payload.id);
        case ACTIONS.COMPLETE_TODO:
            return todos.map( todo => {
                if(todo.id === action.payload.id)
                    return {...todo, completed: true};
                return todo;
            } )
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, completed: false };
}

function Todo(props: any) {
    console.log(props);
    const todoStyle = {
        color: props.todo.completed ? 'blue': 'red',
        backgroundColor: 'green'
    };
    return (
        <>
            <div>
                <span style={todoStyle}>{props.todo.name}</span>
                <button onClick={() => props.dispatch({type: ACTIONS.DELETE_TODO, payload: {id: props.todo.id}})}>Delete</button>
                <button onClick={() => props.dispatch({type: ACTIONS.COMPLETE_TODO, payload: {id: props.todo.id}})}>Completed</button>
            </div>
        </>
       
    )
}

export default function Reducer() {
    const [todos, dispatch] = React.useReducer(reducer, []);
    const [name, setName] = React.useState('');

    function handleSubmit(e: any) {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
        setName('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </form>
            <ul>
                {todos?.map(todo => 
                    <Todo todo={todo} dispatch={dispatch}/>
                )}
            </ul>
            
        </>
    )
}