import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, dest }) => {
    return (
        <a href={dest} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}

export default Icon
