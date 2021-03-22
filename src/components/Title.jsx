import React from 'react'
import './Title.scss'

export default function Title(props) {
    return (
        <div className='title'>
            <h2 className='title-subheadline'>{props.subheadline}</h2>
            <h1 className={props.color === 'dark' ? 'title-headline dark' : 'title-headline'}>{props.headline}</h1>
        </div>
    )
}
