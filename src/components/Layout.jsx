import React from 'react'
import Header from './UI/header/Header'
import Footer from './UI/footer/Footer'

function Layout({ children }) {

	return (
		<>
			<Header />
			<div className='container'>
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Layout