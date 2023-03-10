import "./Button.css"

function Buttion({children, onClick, className = ""}){
    const classNames = `Button ${className}`;
    return (
        <button className={classNames} onClick={onClick}>{children}</button>
    )
}

export default Buttion;