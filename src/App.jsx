import { useState } from 'react'
import './style/App.scss'
import Navigation from './components/Navigation'
import IntroducingSection from './components/Introducing'
import DetailsSection from './components/Details'
import CommentsSection from './components/Comments'

function App() {
	return (
		<>
			<div className='container'>
				<Navigation />
				<IntroducingSection />
				<DetailsSection />
				<CommentsSection />
			</div>
		</>
	)
}

export default App
