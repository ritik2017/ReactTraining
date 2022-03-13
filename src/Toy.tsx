import * as React from 'react';

// React events
// <button onclick="shoot()">Click me</button>

// function Toy() {

//     const handleClick = () => {
//         alert("Hello");
//     }

//     return (
        
//         <button onClick={() => {alert('Hello')}}>Click Me</button>
//     )
// }

// // function Toy(props: {isGoal: boolean}) {

// //     const isGoal = props.isGoal;

// //     // if(isGoal) {
// //     //     return (
// //     //         <h1>You made a goal</h1>
// //     //     )
// //     // }
// //     // else {
// //     //     return (
// //     //         <h1>You missed the goal</h1>
// //     //     )
// //     // }

// //     // return isGoal ? <h1>You made a goal</h1> : <h1>You missed the goal</h1>;

// //     return <></> || isGoal && <h1>You made a goal</h1>;
// // }

// function Car(props) {
//     const haveClass = props.haveClass || false;
//     return <li className={haveClass ? 'hello': ''}>{props.brand}</li>
// } 

// function Toy() {
//     const cars = ['Ford', 'BMW', 'Audi'];
//     return (
//         <ul>
//             {cars.map((car, index) => <Car haveClass={index==0 ? true: false} brand={car}/>)}
//         </ul>
//     )
// }

function Toy() {

    // const [name, setName] = React.useState("");
    // const [age, setAge] = React.useState('');

    const [inputs, setInputs] = React.useState({username: "", age: 0});

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(inputs);
    }

    const handleChange = (event: any) => {
        console.log(event);
        const value = event.target.value;
        const name = event.target.name;

        setInputs({...inputs, [name]: value});
        console.log(inputs);
    }
 
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> 
                    Enter your name:
                    <input 
                        type='text'
                        name='username'
                        onChange={handleChange}    
                    />
                </label>
                <label>
                    Enter your age:
                    <input 
                        type='text'
                        name='age'
                        onChange={handleChange}
                    ></input>
                </label>
                <input type="submit"></input>
            </form>
            <h1>{typeof(inputs.username) !== 'string'? 'Name should be text' : '' }</h1>
            <h1>{typeof(inputs.age) !== 'number' ? 'Age should be a number' : ''}</h1>
        </>
    )
}

export default Toy;