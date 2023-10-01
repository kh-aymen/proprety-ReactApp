import React from 'react'
import './Value.css'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../assets/utils/accordion'


function Value() {

    return (
        <>
            <section className="v-wrapper" id="v-wrapper">
                <div className="paddings flexCenter innerWidth v-container">

                    <div className="v-left"  data-aos="fade-right" data-aos-duration="2000">
                        <div className="image-container">
                            <img src="./images/value.png" alt="" />
                        </div>
                    </div>

                    <div className="flexColStart v-right"  data-aos="fade-left" data-aos-duration="2000">
                        <span className='orangeText'>Our Value</span>
                        <span className='primaryText'>Value We Give to You</span>
                        <span className='secondaryText'>We always ready to help by providijng the best services for you. <br />
                            We beleive a good blace to live can make your life better
                        </span>

                        <Accordion className='accordion'
                            allowMultipleExpanded={false}
                            preExpanded={[0]}
                        >
                            {
                                data.map((item, i) => {
                                    return (
                                        <AccordionItem key={item.id} className='accordion-item'  uuid={i}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton className='flexCenter accordion-button'>


                                                    <div className="flexCenter icon">{item.icon}</div>
                                                    <span className="primaryText">{item.heading}</span>
                                                    <div className="flexCenter icon"><MdOutlineArrowDropDown size={20} /></div>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className='accrodion-panel'>
                                                <span className="secondaryText">{item.detail}</span>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Value