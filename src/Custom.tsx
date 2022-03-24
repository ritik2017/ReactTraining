import { useState, useEffect } from "react";  

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return [data, setData];
}

const Custom = () => {

    const [data, setData] = useFetch('https://jsonplaceholder.typicode.com/todos');

    function handleClick() {
        console.log(data);
        setData([{title: 'Todo1'}, {title: 'Todo2'}]);
    }

    return (
        <>
        <button onClick={handleClick}>Click me</button>
            {
                data.map((item) => {
                    return <p>{item.title}</p>
                })
            }
            
        </>
    )

}

export default Custom;