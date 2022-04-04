import Text from './Text';
import Button from './Button';

import * as React from 'react';

function ButtonText() {

    const [toggle, setToggle] = React.useState(true);

    return (
        <div>
            <Text displayText={"Hello React"} toggle={toggle}></Text>
            <Button setToggle={setToggle} buttonText={"Toggle"} ></Button>
        </div>
    )

}

export default ButtonText;