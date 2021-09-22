import React from 'react'
import PropTypes from 'prop-types'

function Movie(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <img src={props.poster} alt={props.title}/>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie

