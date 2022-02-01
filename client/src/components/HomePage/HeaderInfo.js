import React from 'react'

const HeaderInfo = ({ item }) => {
    return ( 
        <div div className="HeaderInfo">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div>
    )
}

export default HeaderInfo
