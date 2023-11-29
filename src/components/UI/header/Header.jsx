import React, { useEffect, useRef, useState } from 'react'
import cl from './Header.module.scss'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from '../themeToggle/ThemeToggle';


function Header() {
	const location = useLocation();
	const navigate = useNavigate();
	const [burger, setBurger] = useState(false)
	const burgerRef = useRef(null)

	const pageUp = () => {
		window.scrollTo({ top: (0, 0), behavior: "smooth" });
	};

	const handleLogoClick = () => {
		if (location.pathname === '/') {
			pageUp();
		} else {
			navigate('/');
		}
	}

	const handleClickOutside = (e) => {
		if (burgerRef.current && !burgerRef.current.contains(e.target) && !e.target.classList.contains(cl.myBurger)) {
			setBurger(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
	}, [])



	return (
		<>
			<nav className={cl.navBar} >
				<div className={cl.navBarLinks}>
					<h3 onClick={handleLogoClick}>Whysobad?</h3>
					<ul>
						<li>
							<NavLink className={cl.link} to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink className={cl.link} to='/projects'>Projects</NavLink>
						</li>
					</ul>
				</div>
				<ThemeToggle />
				<div className={cl.mobileMenu} onClick={() => { setBurger(!burger) }} ref={burgerRef}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
				</div>
				<div className={burger ? `${cl.myBurger} ${cl.active}` : cl.myBurger}>
					<div className={cl.burgerList}>
						<NavLink className={cl.link} to='/'>Home</NavLink>
						<NavLink className={cl.link} to='/projects'>Projects</NavLink>
					</div>
				</div>
			</nav >
		</>

	)
}

export default Header