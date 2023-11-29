import React from 'react'
import cl from './Footer.module.scss'

function Footer() {
	return (
		<footer className={cl.footer}>
			<div className={cl.content}>
				<h3>© 2023 Adilet Kasimov. All Rights Reserved</h3>
			</div>
		</footer>
	)
}

export default Footer