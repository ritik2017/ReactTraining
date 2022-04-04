import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ButtonText from './ButtonText';

afterEach(() => {
    cleanup();
})

describe('Test on Button Text', () => {

    test('Button Text Rendering', () => {
        render(<ButtonText/>);
        const text = screen.getByTestId('text');
        const button = screen.getByTestId('button');
        expect(text).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    test("Toggling", () => {
        render(<ButtonText/>);
        const text = screen.getByTestId('text');
        const button = screen.getByTestId('button');

        expect(text).toHaveTextContent('Hello React');
        fireEvent.click(button);
        expect(text).toBeEmptyDOMElement();
        fireEvent.click(button);
        expect(text).toHaveTextContent('Hello React');
    })
})