import React from 'react'

import Marquee from "react-fast-marquee";
import { MarqueeContent } from './MarqueeContent';

export const MarqueeBox = () => {
    return (
        <div className='marquee' >
            <Marquee autoFill="false">
                <MarqueeContent marqueeName="My favourite token" marqueeColor="#FF9AFF"/>
                <MarqueeContent marqueeName="Only Glorp" marqueeColor="#87F8B8" />
                <MarqueeContent marqueeName="$GLRP is the ticker" marqueeColor="#FFDA17" />
                <MarqueeContent marqueeName="Glorp, with mystical powers over cheese" marqueeColor="#5EA358" />
                <MarqueeContent marqueeName="Discover new games with Glorp" marqueeColor="#5C81C0" />
                <MarqueeContent marqueeName="Glorp quest" marqueeColor="#AF1301" />
            </Marquee>

        </div>
    )
}
