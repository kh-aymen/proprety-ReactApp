import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <>
            <section className="f-wrapper">
                <div className="paddings innerWidth flexCenter f-container">
                    <div className="flexColStart f-left">
                        <img src="./images/logo2.png" alt="" />
                        <span className="secondaryText">Our vision is to make all people<br />the best place to live for them.</span>
                    </div>
                    <div className="flexColStart f-right">
                        <span className="primaryText">Informatoin</span>
                        <span className="secondaryText">Created By <strong>khafi aymen</strong></span>
                        <span className="secondaryText">Algerai, Batna, Kechida</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer