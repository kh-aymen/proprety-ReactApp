import React from 'react'
import './Companies.css'

function Companies() {
    return (
        <>
            <section className="c-wrapper">
                <div className="paddings flexCenter innerWidth c-container">
                    <img src="./images/prologis.png" alt="" data-aos="fade-down" data-aos-duration="1000" />
                    <img src="./images/tower.png" alt=""    data-aos="fade-down" data-aos-duration="1300" />
                    <img src="./images/equinix.png" alt=""  data-aos="fade-down" data-aos-duration="1600" />
                    <img src="./images/realty.png" alt=""   data-aos="fade-down" data-aos-duration="1900" />
                </div>
            </section>
        </>
    )
}

export default Companies