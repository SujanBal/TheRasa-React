import React from 'react'
import Title from '../Title'
import './Recipes.scss'

export default function Recipes() {
    return (
        <section className='recipes' id='recipes'>
            <div className="container flex flex-jc-c flex-ai-c">
                <Title subheadline='Tasteful' headline='Recipes' />
            </div>
        </section>
    )
}
