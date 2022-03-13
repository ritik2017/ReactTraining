import React, {useState, useEffect} from 'react';

// function Car() {

//     const [resourceType, setResourceType] = useState('posts');
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//         .then( response => response.json())
//         .then(data => setItems(data));
//     }, [resourceType]);

//     return (
//         <>
//             <div>
//                 <button onClick={() => setResourceType('posts')}>Posts</button>
//                 <button onClick={() => setResourceType('users')}>Users</button>
//                 <button onClick={() => setResourceType('comments')}>Comments</button>
//             </div>
//             <h1>{resourceType}</h1>
//             <ul>
//                 {items.map((item, key) => {
//                     return <pre>{JSON.stringify(item)}</pre>
//                 })}
//             </ul>
//         </>
//     )
// }

// function Car() {

//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//     }

//     useEffect(() => {
//         window.addEventListener('resize', handleResize);

//         // Executes on component unmount
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         }
//     }, []);

//     return (
//         <div>
//             {windowWidth}
//         </div>
//     )
// }


function Car() {

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Mount

        return () => {
            // Unmount
        }
    }, []) 

    useEffect(() => {
        console.log('resource changed');

        return () => {
            console.log("Resource unmounted");
        }
    }, [resourceType]);

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    )
}

export default Car;

// useEffect
// 1. component Mounting
// 2. component updation and unmounting
// 3. Logic on state change 