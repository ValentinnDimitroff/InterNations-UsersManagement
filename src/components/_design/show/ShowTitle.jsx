import React from 'react'
import PropTypes from 'prop-types'

const ShowTitle = ({ record, render }) => {
    return <span>{render(record)}</span>
}

ShowTitle.propTypes = {
    render: PropTypes.func,
    record: PropTypes.object,
}

export default ShowTitle
