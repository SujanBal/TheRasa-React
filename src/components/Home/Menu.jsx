import React from 'react'
import InfoSection from '../InfoSection'
const text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos earum qui est reiciendis dolores officia dolor sequi. Corporis minus nihil omnis. Provident cumque cupiditate odio.'
const images = [{ image_url: 'images/menu-group-1.jpg', image_name: 'menu-group-1'}, { image_url: 'images/menu-group-2.jpg', image_name: 'menu-group-2' },
{ image_url: 'images/menu-group-3.jpg', image_name: 'menu-group-3' }, { image_url: 'images/menu-group-4.jpg', image_name: 'menu-group-4' }]
export default function Menu() {
    return (
        <section className='menu' id='menu'>
          <InfoSection subheadline='Discover' headline='Our Menu' text={text} btn_name='View Our Full Menu' images={images} />
        </section>
            
    )
}
