const Text = ({displayText, toggle}) => {
    return <h1 data-testid="text">{toggle ? displayText : ""}</h1>
}

export default Text;