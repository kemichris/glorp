import React from 'react'
import TokenomicsImg from "../assets/tokenomics.png"


export const Tokenomics = () => {

    const copyAddress = () => {
        navigator.clipboard.writeText("akfjklasjflkasjkdfasdjkfjsakfjdlksdjfklds")
        alert("address copied")
    }

    return (
        <div className='tokenomics' id='tokenomics'>
            <h2>Tokenomics</h2>
            <div className="tokenomicsDetails">
                <div className="tokenomicsText">
                    <p className='ticker'>$GLRP is Happy</p>
                    <p className='tokenSupply'>Token supply</p>
                    <h3 className='tokenSupplyFigure'>100,000,000</h3>
                    {/* <ul>
                    <li><strong>90</strong>% liquidity pool</li>
                    <li><strong>5</strong>% NFT Airdrop = 3.75% Coolman's Universe | 1.25% Babies</li>
                    <li><strong>5</strong>% for future rewards coming soon</li>
                </ul> */}
                </div>
                <img src={TokenomicsImg} alt="" />

                <div className="contractAddress">
                    <p className='caText'>Contract Address</p>
                    <p className='ca' onClick={copyAddress}>Coming soon... {/*<i class="fa-solid fa-copy"></i>*/}</p>

                </div>
            </div>
        </div>
    )
}
