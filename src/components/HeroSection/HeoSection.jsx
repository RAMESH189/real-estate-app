import React from 'react'
import './herosection.css';
import { MdLocationPin } from "react-icons/md";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const HeoSection = () => {
  return (
    <section className='hero-wrapper'>
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: '2rem', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: 'tween'
              }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="innerWidth flexCenter hero-searchBar">
            <MdLocationPin color='var(--blue)' size={25} />
            <input type='text'/>
            <button className='button'>search</button>
          </div>
          <div className="flexCenter hero-stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4}/>
                <span>+</span>
              </span>
            <span className='secondaryText'>Premium products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span>+</span>
              </span>
            <span className='secondaryText'>Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={28} duration={4}/>
                <span>+</span>
              </span>
            <span className='secondaryText'>Happy Customer</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: '7rem', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: 'tween'
            }}
          >
            <img src="./hero-image.png" alt="heroImage" />
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeoSection