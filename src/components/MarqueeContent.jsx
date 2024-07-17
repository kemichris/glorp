import React from 'react'
import stars from "../assets/star.svg"

export const MarqueeContent = (props) => {
    const {marqueeName, marqueeColor} = props;
    return (

        <div className="marqueeContent" style={{background: marqueeColor}}>
            <img src={stars} alt="" />
            <p>{marqueeName}</p>
            <img src={stars} alt="" />
        </div>
    )
}
