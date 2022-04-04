import { cleanup, render, screen } from '@testing-library/react';
import Button from './Button';

afterEach(() => {
    cleanup();
})

describe("Test on button", () => {
    const setToggle = jest.fn();
    render(<Button buttonText={"Toggle"} setToggle={setToggle}/>)

    const button = screen.getByTestId('button');

    test('Button Rendering', () => {
        expect(button).toBeInTheDocument();
    })

    test('Button Text', () => {
        expect(button).toHaveTextContent('Toggle');
    })
})