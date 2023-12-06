import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './residency.css';
import Slider from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Residency = () => {
  return (
    <section r-wrapper>
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Polpular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {
            Slider.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt={card.name} />

                  <span className='secondaryText r-price'>
                    <span style={{color: 'orange'}}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Residency;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}