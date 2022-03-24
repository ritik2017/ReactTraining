import styles from './Styles.module.css'

function Style() {
    const name = 'Rahul';
    return (
        <>
            <h1> {`Hello World!! ${name}`} </h1>
            <h1 className={styles.h1color}>Hello All!!</h1>
        </>
    )
}

export default Style;

// Inline styling - background-color - backgroundColor, margin-left - marginLeft
// Css Stylesheet - .css 
// Css Modules - module.css