import { fireEvent, render } from '@testing-library/react';
import Checkbox from './Checkbox';

// test('Selecting the checkbox', () => {
//     const { getByLabelText } = render(<Checkbox/>)

//     const checkbox = getByLabelText(/Not Checked/);

//     fireEvent.click(checkbox);

//     expect(checkbox.checked).toBe(true);

//     fireEvent.click(checkbox);

//     expect(checkbox.checked).toBe(false);
// })

describe('Checking checkbox functionality', () => {
    const { getByLabelText } = render(<Checkbox/>)

    const checkbox = getByLabelText(/Not Checked/);

    test('selecting the checkbox', () => {
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
    })

    test('unselecting the checkbox', () => {
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(false);
    })
})