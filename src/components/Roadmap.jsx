import React from 'react'

import RoadmapImg from "../assets/glorp2-copy.png"

export const Roadmap = () => {
  return (
    <div className='roadmap'>
        <img src={RoadmapImg} alt="" />
        <div className="roadmapDetails">
            <h2>Roadmap</h2>
            <p>we're just gonna keep riding with Glorp... More updates on Glorp coming soon</p>
        </div>
    </div>
  )
}
