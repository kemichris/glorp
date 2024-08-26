import React from 'react'

export const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  return (
    <div className='footer'>
        <div className="footerFlex">
            <p> ©️ Glorp {currentYear} </p>

            <div className="quickLinks">
              <h3>Quick Links</h3>
              <a href="https://x.com/GLRPonSol" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
              <a href="https://x.com/GLRPonSol" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
              <a href="https://x.com/GLRPonSol" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            </div>

            <div className="contact">
              <p>hello@glorp.xyz</p>
              
              <p>Contract Address: akfjklasjflkasjkdfasdjkfjsakfjdlksdjfklds <i class="fa-solid fa-copy"></i></p>  
            </div>
         
        </div>

        <div className="disclaimer">
          <p>$GLRP is a memecoin combined with fun utilities. This is not a financial scheme nor advice. Do not invest what you cannot afford to lose. We won’t be held responsible for any loss of fund.</p>
        </div>
    </div>
  )
}
