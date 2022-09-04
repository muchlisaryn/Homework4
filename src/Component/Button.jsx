

const Button = ({text}) => {
    return (
        <button className="btn btn-light px-4 p-2 fw-bold text-secondary">{text}</button>
    )
}

Button.propTypes = {
    text : ''
}


export default Button;