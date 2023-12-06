import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className="paddings innerWidth flexCenter footer-container">
        <div className="flexColStart footer-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people<br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart footer-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter footer-items">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer