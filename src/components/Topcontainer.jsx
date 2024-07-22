import React, { useEffect, useState } from 'react';
import topVideo from "../assets/glorpV1.mp4";

export const Topcontainer = () => {


    const [play, setPlay] = useState(true);

    useEffect(() => {
        const video = document.getElementById("video");
        video.play()
        video.addEventListener("ended", () => {
            setPlay(false);
            setTimeout(() => {
                setPlay(true);
                video.play();
            }, 500)
        });
    }, []);

    return (
        <div className='topContainer'>
            <video id='video' playsInline loop={play} preload="auto" muted >
                <source src={topVideo} />
            </video>
        </div>
    )
}
