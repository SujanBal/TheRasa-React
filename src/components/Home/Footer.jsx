import React from 'react'
import './Footer.scss'
import { Link as LinkRouter } from 'react-router-dom'
import {Link} from 'react-scroll'
export default function Footer() {
    return (
        <footer className='footer' id='contact'>
            <div className="container">
                <div className="scrolltop flex flex-ai-c flex-jc-c">
                    <Link to='hero' activeClass="active" spy={true} smooth={true} offset={0} duration={500}><i className="far fa-chevron-up"></i></Link>
                    
                </div>
                <div className="footer-text">
                    <h1>About Rosa</h1>
                    
                    <i className="fas fa-asterisk"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Dolorum consectetur quibusdam at, facere possimus quos numquam
                        explicabo minus! Qui est ipsa magni provident iusto eaque tempora
                        ab nam laboriosam aliquam facilis quibusdam necessitatibus id omnis vitae illo, dolorum debitis laborum?</p>
                </div>
                <div className="footer-contacts flex flex-ai-c">
                    <div className="footer-contacts-socialicons">
                        <h1>Follow Along</h1>
                        <LinkRouter to='#'><i className="fab fa-twitter"></i></LinkRouter>
                        <LinkRouter to='#'><i className="fab fa-facebook"></i></LinkRouter>
                        <LinkRouter to='#'><i className="fab fa-pinterest"></i></LinkRouter>
                        <LinkRouter to='#'><i className="fab fa-linkedin"></i></LinkRouter>
                        <LinkRouter to='#'><i className="fab fa-tripadvisor"></i></LinkRouter>
                    </div>
                    <div className="footer-contacts-newsletter">
                        <h1>Newsletter</h1>
                        <div className="form">
                            <input type="email" placeholder='Your email address...' />
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
