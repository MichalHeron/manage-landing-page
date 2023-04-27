import React, { useState } from 'react'
import '../style/Navigation.scss'
import logo from '../../images/logo.svg'
import { useMediaQuery } from 'react-responsive'
import { Sling as Hamburger } from 'hamburger-react'

export default function Navigation() {
	const isDesktop = useMediaQuery({ query: '(min-width:760px' })
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<div className='navBar'>
				<a href='/' className='logo'>
					<img src={logo} alt='logo' />
				</a>
				{isDesktop && (
					<>
						<div className='nav'>
							<a href=''>Pricing</a>
							<a href=''>Product</a>
							<a href=''>About Us</a>
							<a href=''>Careers</a>
							<a href=''>Community</a>
						</div>
						<button>
							Get Started
						</button>
					</>
				)}
				{!isDesktop && <Hamburger toggled={isOpen} toggle={setOpen} direction='right' distance='sm' />}
			</div>
		</>
	)
}
