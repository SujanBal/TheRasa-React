import React from 'react'
import {Link} from 'react-scroll'
import Title from '../Title'
import './Hero.scss'

export default function Hero() {
    return (
        <section className='hero'>
            <div className="container flex flex-jc-c flex-ai-c">
                <Title subheadline='Welcome' headline='The Rosa' />
                <div className='hero-separetor flex flex-jc-c flex-ai-c'>
                    <span className='arrow-left'></span>
                    <i className='fas fa-asterisk'></i>
                    <span className='arrow-right'></span>
                </div>
                
                <h5>Ready To Be Opened</h5>
                <Link className='hero-btn'>Explore</Link>
            </div>
            
        </section>
    )
}
