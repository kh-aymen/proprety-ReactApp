import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../assets/utils/slider.json'
import { slideSettings } from '../../assets/utils/common'

function Residencies() {
    return (
        <>
            <section className="r-wrapper"  id="r-wrapper">
                <div className="paddings innerWidth r-container">

                    <div className="flexColStart r-head" data-aos="fade-down" data-aos-duration="2000">
                        <span className='orangeText'>Best Choices</span>
                        <span className='primaryText'>Popular Residecies</span>
                    </div>

                    <Swiper  {...slideSettings} data-aos="fade-up" data-aos-duration="2000">
                        <SliderButton />
                        {
                            data.map((card, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div className="flexColStart r-card">
                                            <img src={card.image} alt="" />
                                            <span>
                                                <span style={{ color: 'orange' }}>$</span>
                                                <span className='secondaryText'>{card.price}</span>
                                            </span>
                                            <span className="primaryText">{card.name}</span>
                                            <span className="secondaryText">{card.detail}</span>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
            </section>
        </>
    )
}

export default Residencies



const SliderButton = () => {
    const swiper = useSwiper()
    return (
        <>
            <div className="flexCenter r-button">
                <button onClick={() => swiper.slidePrev()} >&lt;</button>
                <button onClick={() => swiper.slideNext()} >&gt;</button>
            </div>
        </>
    )
}