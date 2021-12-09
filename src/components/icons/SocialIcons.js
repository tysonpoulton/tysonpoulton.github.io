import React from 'react'
import { SOCIAL_ITEMS } from '../../constants'
import Icon from './Icon'

const SocialIcons = () => {
    return (
        <span className="flex flex-row mx-auto fa-2x gap-4">
            {SOCIAL_ITEMS.map((item, id) => 
                <Icon {...item} key={id} />
            )}
        </span>
    )
}

export default SocialIcons
