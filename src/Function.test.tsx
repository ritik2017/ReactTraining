import { render } from '@testing-library/react';
import Function, { timesTwo } from './Function';

test('Times two', () => {
    expect(timesTwo(4)).toBe(8);
})

test('Render an h1', () => {
    const { getByText } = render(<Function/>);

    const h1 = getByText(/Hello Everyone to React/, {exact: true});

    expect(h1).toHaveTextContent("Hello Everyone to React");
})

// toBe toEqual
// toBeInTheDocument
// toHaveTextContent
// toBeEmptyDOMElement