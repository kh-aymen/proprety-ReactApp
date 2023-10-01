import React from 'react'
import './Contact.css'
import { AiFillPhone } from 'react-icons/ai'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BiMessageAltDetail } from 'react-icons/bi'

function Contact() {
    return (
        <>
            <section className="c-wrapper" id='c-wrapper'>
                <div className="paddings innerWidth flexCenter c-contact">

                    <div className="flexColStart c-left" data-aos="fade-right" data-aos-duration="2000">
                        <span className="orangeText">Our Contact Us</span>
                        <span className="primaryText">Easy to contact us</span>
                        <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>

                        <div className="c-left-grid">
                            <div className="griddiv flexColStart c-left-grid-div1">
                                <div className="flexCenter grid-item-info">
                                    <div className="flexCenter icon"><AiFillPhone size={20} /></div>
                                    <div className="flexColStart info-text">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">0230003020</span>
                                    </div>
                                </div>
                                <div className="grid-item-button">
                                    <button className='button'>Call Now</button>
                                </div>
                            </div>
                            <div className="griddiv flexColStart c-left-grid-div2">
                                <div className="flexCenter grid-item-info">
                                    <div className="flexCenter icon"><BsFillChatDotsFill size={20} /></div>
                                    <div className="flexColStart info-text">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">0230003020</span>
                                    </div>
                                </div>
                                <div className="grid-item-button">
                                    <button className='button'>Call Now</button>
                                </div>
                            </div>
                            <div className="griddiv flexColStart c-left-grid-div3">
                                <div className="flexCenter grid-item-info">
                                    <div className="flexCenter icon"><BsFillCameraVideoFill size={20} /></div>
                                    <div className="flexColStart info-text">
                                        <span className="primaryText">Video Call</span>
                                        <span className="secondaryText">0230003020</span>
                                    </div>
                                </div>
                                <div className="grid-item-button">
                                    <button className='button'>Call Now</button>
                                </div>
                            </div>
                            <div className="griddiv flexColStart c-left-grid-div4">
                                <div className="flexCenter grid-item-info">
                                    <div className="flexCenter icon"><BiMessageAltDetail size={20} /></div>
                                    <div className="flexColStart info-text">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">0230003020</span>
                                    </div>
                                </div>
                                <div className="grid-item-button">
                                    <button className='button'>Call Now</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flexCenter c-right" data-aos="fade-left" data-aos-duration="2000">
                        <div className="image-container">
                            <img src="./images/contact.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact