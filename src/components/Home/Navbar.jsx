import React, { useState } from "react";
import {Link} from 'react-scroll'
import "./Navbar.scss";

export default function Navbar() {
	const [openMenu, setopenMenu] = useState(false)
	return <header>
		<div className="container">
			<nav className="navbar flex flex-jc-sb flex-ai-c">
				<Link className='navbar-logo' to='hero' activeClass="active" spy={true} smooth={true} offset={0} duration={500}><img src="images/logo-rosa.png" alt="logo-rosa" /></Link>
				<ul className={openMenu ? "navbar-menu open" : 'navbar-menu'}>
					<li className="navbar-menu-item">
						<Link to='hero' activeClass="active" spy={true} smooth={true} offset={-105} duration={500} onClick={()=>setopenMenu(!openMenu)}>Home</Link>
					</li>
					<li className="navbar-menu-item">
						<Link to='about' activeClass="active" spy={true} smooth={true} offset={-105} duration={500} onClick={()=>setopenMenu(!openMenu)}>About</Link>
					</li>
					<li className="navbar-menu-item">
						<Link to='menu' activeClass="active" spy={true} smooth={true} offset={-105} duration={500} onClick={()=>setopenMenu(!openMenu)}>Menu</Link>
					</li>
					<li className="navbar-menu-item">
						<Link to='recipes' activeClass="active" spy={true} smooth={true} offset={-105} duration={500} onClick={()=>setopenMenu(!openMenu)}>Recipes</Link>
					</li>
					<li className="navbar-menu-item">
						<Link to='culinary' activeClass="active" spy={true} smooth={true} offset={-135} duration={500} onClick={()=>setopenMenu(!openMenu)}>Reservations</Link>
					</li>
					<li className="navbar-menu-item">
						<Link to='contact' activeClass="active" spy={true} smooth={true} offset={-175} duration={500} onClick={()=>setopenMenu(!openMenu)}>Contact</Link>
					</li>
				</ul>
				<i className={openMenu ? 'fas fa-times' : 'fas fa-bars'} onClick={()=>setopenMenu(!openMenu)}/>
			</nav>
		</div>
	</header>;
}
