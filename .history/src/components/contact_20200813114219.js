import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({config}) => {
    return (
        <div className="subheading mb-5">
            `${config.address} · ${(<a href={config.calendly}>Book a time to talk</a>)} · ${(<a href={`mailto:${config.email}`}>{config.email}</a>)}`
        </div>
    )
}

Contact.propTypes = {

}

export {Contact}
