import React from 'react'
import InfoSection from '../InfoSection'
const text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos earum qui est reiciendis dolores officia dolor sequi. Corporis minus nihil omnis. Provident cumque cupiditate odio.'
const images = [{ image_url: 'images/delight-group-1.jpg', image_name: 'delight-group-1'}, { image_url: 'images/delight-group-2.jpg', image_name: 'delight-group-2' }]
export default function Culinary() {
    return (
        <section className='culinary' id='culinary'>
          <InfoSection subheadline='Culinary' headline='Delight' text={text} btn_name='Make A Reservation' images={images} />
        </section>
            
    )
}
