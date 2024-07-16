import React from 'react'
import AboutImage from "../assets/glorp1-copy.png"

export const About = () => {
  return (
    <div className='about'>
      <div className="aboutImg">
        <img src={AboutImage} alt="" />
      </div>
      
      <div className="aboutContent">
        <h4>New World Unlocked</h4>
        <h2>What is GlorpCoin</h2>
        <p>GlorpCoin ($GLRP) is a memecoin inspired by the legendary hamster, Glorp, with mystical powers over cheese.
          Our mission is to create a fun-filled journey into the world of cryptocurrency memecoins, where Glorp's
          decisions shape our memecoin's destiny. 
        </p>
        <p>We aim to develop a unique ecosystem, including the Cheese Reserve,
          Glorp's Quests, Glorp's Council, and Glorp's Cheese Arcade, providing various use cases and opportunities
          for our community.
        </p>
      </div>
    </div>
  )
}
