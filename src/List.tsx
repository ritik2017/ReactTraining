import * as React from 'react';

function List({ getItems }) {

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        setItems(getItems(10));
        console.log('Inside function');
    }, [getItems]);

    return items.map(item => <div>{item}</div>)
}

export default List;