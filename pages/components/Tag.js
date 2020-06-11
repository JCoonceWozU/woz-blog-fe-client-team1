import React from 'react'

const Tag = ({tag}) => {
    return(<ul>
        <li>name: {tag.name}</li>
        <li>image: {tag.imageUrl}</li>
    </ul>)
}

export default Tag
