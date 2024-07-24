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
            <div className="topText">
                <h1>Welcome to GlorpCoin</h1>
                <p>May the cheese be with you</p>
            </div>
            <video id='video' playsInline loop={play} preload="auto" muted >
                <source src={topVideo} />
            </video>
        </div>
    )
}
