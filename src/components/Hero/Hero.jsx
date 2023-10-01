import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'



function Hero() {
    return (
        <>
            <section className="hero-warpper">

                <div className="paddings innerWidth flexCenter hero-container">

                    <div className="flexColStart hero-left" data-aos="fade-right" data-aos-duration="2000">

                        <div className="hero-title">
                            <div className="orange-circle" />
                            <h1>Discover <br />
                                Most Suitable <br />
                                Property</h1>
                        </div>
                        <div className="flexColStart hero-desc">
                            <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                        </div>
                        <div className="flexCenter search-bar">
                            <HiLocationMarker color='var(--blue)' size={25} />
                            <input type="text" placeholder='Your Location' />
                            <button className="button">Search</button>
                        </div>
                        <div className="flexCenter status">
                            <div className="flexColStart stat">
                                <span><CountUp start={8800} end={9000} duration={4} /> <span>+</span></span>
                                <span className='secondaryText'>Premium Product</span>
                            </div>
                            <div className="flexColStart stat">
                                <span><CountUp start={1800} end={2000} duration={4} /> <span>+</span></span>
                                <span className='secondaryText'>Happy Customer</span>
                            </div>
                            <div className="flexColStart stat">
                                <span><CountUp start={0} end={28} duration={4} /> <span>+</span></span>
                                <span className='secondaryText'>Awards Winning</span>
                            </div>
                        </div>

                    </div>

                    <div className="flexCenter hero-right" data-aos="fade-left" data-aos-duration="2000">
                        <div className="image-container">
                            <img src="./images/hero-image.png" alt="" />
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Hero