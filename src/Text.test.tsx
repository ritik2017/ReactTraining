import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Text from "./Text";

afterEach(() => {
	cleanup();
})

describe("Text Component" ,() => {

	test("Text Rendering", () => {
		render(<Text toggle={true} displayText={"Hello React"}/>);
		const text = screen.getByTestId("text");
		expect(text).toBeInTheDocument();
	})

	test("Displayed Text when toggle is set to true", () => {
		render(<Text toggle={true} displayText={"Hello React"}/>)
		const text = screen.getByTestId("text");
		expect(text).toHaveTextContent("Hello React");
	})

	test("Displayed Text when toggle is set to false", () => {
		render(<Text toggle={false} displayText={"Hello React"}/>);
		const text = screen.getByTestId("text");
		expect(text).toBeEmptyDOMElement();
	})
})
