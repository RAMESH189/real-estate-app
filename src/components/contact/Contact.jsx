import React from 'react'
import './contact.css'
import { MdCall } from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { BsChatLeftDotsFill } from "react-icons/bs";


const Contact = () => {
  return (
    <section className='con-wrapper'>
      <div className="paddings innerWidth flexCenter con-container">
        {/* left side */}
        <div className="flexColStart con-left">
          <span className='orangeText'>Contact us</span>
          <span className='primaryText'>for more information</span>
          <span className='secondaryText'>
            We are ready to help by providing the best services for you.
            We beleive a good place <br /> to live can make your life better
          </span>
          <div className="flexColStart con-modes">
            <div className="flexStart row">
              <div className="flexColCenter mode">

                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}/>
                  </div>
                  <div className="flexColStart details">
                    <span className='primaryText'>Call</span>
                    <span>+91 3464738560</span>
                  </div>
                </div>
                <div className='flexCenter button'>Call now</div>

              </div>
              <div className="flexColCenter mode">

                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoChatbubbles size={25}/>
                  </div>
                  <div className="flexColStart details">
                    <span className='primaryText'>Chat</span>
                    <span>+91 3464738560</span>
                  </div>
                </div>
                <div className='flexCenter button'>Chat now</div>

              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">

                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdVideoCall size={25}/>
                  </div>
                  <div className="flexColStart details">
                    <span className='primaryText'>Video call</span>
                    <span>+91 3464738560</span>
                  </div>
                </div>
                <div className='flexCenter button'>face time</div>

              </div>
              <div className="flexColCenter mode">

                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsChatLeftDotsFill size={25}/>
                  </div>
                  <div className="flexColStart details">
                    <span className='primaryText'>Message</span>
                    <span>+91 3464738560</span>
                  </div>
                </div>
                <div className='flexCenter button'>text now</div>

              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="con-right">
          <div className="con-image-container">
            <img src="./contact.jpg" alt="valuesImage" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact