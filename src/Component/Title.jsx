import PropTypes from 'prop-types'

const Title = ({value}) => {
    return (
        <h1>{value}</h1>
    )
}

Title.propTypes = {
    value: PropTypes.string
}

export default Title;