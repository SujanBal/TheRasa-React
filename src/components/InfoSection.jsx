import React from 'react'
import Title from './Title'
import './InfoSection.scss'
import {Link} from 'react-scroll'
export default function InfoSection(props) {
    return (
        <div className='info-section container flex flex-jc-sb flex-ai-c'>
            <div className="info">
                <Title subheadline={props.subheadline} headline={props.headline} color='dark'></Title>
                <i className='fas fa-asterisk'></i>
                <p>{props.text}</p>
                <Link>{props.btn_name}</Link>
            </div>
            <div className={props.images.length>=2?'images image-grid':'images'}>
                {props.images && props.images.map((image, index) => {
                    const { image_url, image_name } = image;
                    return <img key={index} src={image_url} alt={image_name}/>
                })}
            </div>
            
        </div>
    )
}
