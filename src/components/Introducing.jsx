import React from 'react'
import introImg from '../../images/illustration-intro.svg'
import bcgElement from '../../images/bg-tablet-pattern.svg'
import '../style/Contents.scss'

export default function IntroducingSection() {
	return (
		<section className='introducing'>
			<div className='boxContainer'>
				<div className='description'>
					<h1>Bring everyone together to build better products.</h1>
					<p>
						Manage makes it simple for software teams to plan day-to-day tasks while keeping the largest team goals in
						view
					</p>
					<button className='getStarted'>Get Started</button>
				</div>
				<div className='introducingImages'>
					<img src={introImg} alt='imagesWithExamples'></img>
				</div>
				<img src={bcgElement} className='backgroundElement_1'></img>
			</div>
		</section>
	)
}
