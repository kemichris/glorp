import React from 'react'
import Logo from "../assets/glorp_logo.png"

export const Loading = () => {
  return (
    <div className='loading'>
        <div className="loadingCircle">
            <img src={Logo} alt="" />
        </div>
    </div>
  )
}
