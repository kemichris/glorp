import React from 'react'
import TokenomicsImg from "../assets/glorp3-copy.png"


export const Tokenomics = () => {

    const copyAddress = ()=>{
        navigator.clipboard.writeText("......React.")
        // enqueueSnackbar("Address copied", {variant: "success"});
    }

  return (
    <div>
        <h2>Tokenomics</h2>
        <div className="tokenomicsDetails">
            <img src={TokenomicsImg} alt="" />
            <div className="tokenomicsText">
                <p>$GLRP is Happy</p>
                <p>Token supply</p>
                <h3>10000000</h3>
                <ul>
                    <li>90% liquidity pool</li>
                    <li>5% NFT Airdrop = 3.75% Coolman's Universe | 1.25% Babies</li>
                    <li>5% for future rewards coming soon</li>
                </ul>

                <div className="contractAddress">
                    <p>Token Address</p>
                    <p onClick={copyAddress}>........</p>
                    <i class="fa-solid fa-copy"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
