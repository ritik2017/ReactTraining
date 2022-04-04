const Button = ({buttonText, setToggle}) => {
    return (
        <button data-testid="button" onClick={() => setToggle((prev) => !prev )}>
            {buttonText}
        </button>
    )
}

export default Button;