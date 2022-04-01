import * as React from 'react';

export default function Checkbox() {

    const [checked, toggle] = React.useReducer((checked) => !checked, false);

    return (
        <>
            <form>
                <label htmlFor='check'>
                    {checked ? "Checked" : "Not Checked"}
                </label>
                <input data-testId='check123' id='check' type='checkbox' value={checked} onChange={toggle}></input>
            </form>
            
        </>
    )

}