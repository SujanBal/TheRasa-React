import React, { useState } from "react";
import {Link} from 'react-scroll'
import "./Navbar.scss";

export default function Navbar() {
	const [openMenu, setopenMenu] = useState(false)
	return <header>
		<div className="container">
			<nav className="navbar flex flex-jc-sb flex-ai-c">
				<Link className='navbar-logo'><img src="images/logo-rosa.png" alt="logo-rosa" /></Link>
				<ul className={openMenu ? "navbar-menu open" : 'navbar-menu'}>
					<li className="navbar-menu-item">
						<Link>Home</Link>
					</li>
					<li className="navbar-menu-item">
						<Link>About</Link>
					</li>
					<li className="navbar-menu-item">
						<Link>Menu</Link>
					</li>
					<li className="navbar-menu-item">
						<Link>Recipes</Link>
					</li>
					<li className="navbar-menu-item">
						<Link>Reservations</Link>
					</li>
					<li className="navbar-menu-item">
						<Link>Contact</Link>
					</li>
				</ul>
				<i className={openMenu ? 'fas fa-times' : 'fas fa-bars'} onClick={()=>setopenMenu(!openMenu)}/>
			</nav>
		</div>
	</header>;
}
