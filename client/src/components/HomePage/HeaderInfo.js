import React from 'react'

const HeaderInfo = ({ item }) => {
    return ( 
        <div div className="HeaderInfo">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>
    )
}

export default HeaderInfo
