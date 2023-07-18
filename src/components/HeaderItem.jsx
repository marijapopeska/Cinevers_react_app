import React from 'react'

const HeaderItem = ({ Icon, title }) => {
    return (
        <div>
            <Icon/>
            <p>{title}</p>
        </div>
    )
}

export default HeaderItem