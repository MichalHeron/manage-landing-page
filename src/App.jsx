import { useState } from 'react'
import './style/App.scss'
import Navigation from './components/Navigation'
import IntroducingSection from './components/Introducing'

function App() {
	return (
		<>
			<div className='container'>
				<Navigation />
				<IntroducingSection />
			</div>
		</>
	)
}

export default App
