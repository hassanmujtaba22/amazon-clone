import React from 'react'
import HomeImage from "../images/banner.jpg"
function Banner() {
    return (
        <div className="banner">
            <img src={HomeImage} alt="Banner" className="homeImg"/>
        </div>
    )
}

export default Banner
