import { useSelector, useDispatch } from "react-redux";
import ChildRedux from './ChildRedux';

export default function Redux() {

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    console.log('Hello from redux');

    return (
        <>
            <ChildRedux/>

            <h2>Counter</h2>
            <h3>{counter}</h3>

            <button onClick={() => dispatch({type: "INCREMENT"})}>Increase</button>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrease</button>
        </>
    )
}

