import React from 'react'
import InfoSection from '../InfoSection'
import './About.scss'
// import image as 'images/our-story-1.'

const text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis minus doloribus non quod, eligendi repudiandae? Error neque ab quisquam illo inventore officia id necessitatibus, adipisci in fugiat atque aspernatur? Magnam.'
const images=[{image_url:'images/our-story-1.jpg', image_name:'our-story'}]
export default function About() {
    return (
        <section className='about' id='about'>
            <InfoSection subheadline='Discover' headline='Our Story' text={text} btn_name='About Us' images={images}/>
            
        </section>
    )
}
