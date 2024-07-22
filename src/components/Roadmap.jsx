import React, { useEffect, useState } from 'react'

import RoadmapVideo from "../assets/glorpV2.mp4";



export const Roadmap = () => {
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const video = document.getElementById("roadmapVideo");
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
    <div className='roadmap'>
      <video id='roadmapVideo' playsInline loop={play} preload="auto" muted >
        <source src={RoadmapVideo} />
      </video>
      <div className="roadmapDetails">
        <h2>Roadmap</h2>
        <p>we're just gonna keep riding with Glorp... More updates on Glorp coming soon</p>
      </div>
    </div>
  )
}
