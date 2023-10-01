import React from 'react'
import './Header.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Header() {

    const [icon, setIcon] = React.useState(true)
    return (
        <>
            <section className="h-wrapper">

                <div className="paddings flexCenter innerWidth h-container">

                    <img src="./images/logo.png" alt="" style={{ width: 100 }} />

                    <div className="h-menu flexCenter">
                        <a href="#r-wrapper">Residencies</a>
                        <a href="#v-wrapper">Our Value</a>
                        <a href="#c-wrapper">Contact Us</a>
                        <a href="#s-wrapper">Get Started</a>
                        <button className="button">
                            <a href="#c-wrapper">Contact</a>
                        </button>
                    </div>
                    <button className='btn' onClick={() => setIcon(!icon)}>
                        {icon
                            ? <AiOutlineMenu />
                            : <AiOutlineClose />
                        }
                    </button>

                </div>
                {
                    icon
                        ? ''
                        : <div className="h-menu-respo flexColStart">
                            <a href="#r-wrapper">Residencies</a>
                            <a href="#v-wrapper">Our Value</a>
                            <a href="#c-wrapper">Contact Us</a>
                            <a href="#s-wrapper">Get Started</a>
                            <button className="button">
                                <a href="#c-wrapper">Contact</a>
                            </button>
                        </div>
                }
            </section>
        </>
    )
}

export default Header