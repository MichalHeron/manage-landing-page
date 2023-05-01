import React from 'react'
import introImg from '../../images/illustration-intro.svg'
import bcgElement from '../../images/bg-tablet-pattern.svg'
import '../style/Contents.scss'

export default function DetailsSection() {
	return (
		<section className='details'>
			<div className='boxContainer'>
				<div className='description'>
					<h2>What's different about Manage?</h2>
					<p>
						Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made
						for modern digital product team.
					</p>
				</div>

				<div className='list'>
					<div className='descriptionList'>
						<div className='listPointBox'>01</div>
						<h3>Track company-wide progress</h3>
						<p>
							See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestones level
							all the way done to the smallest of details. Never lose sight of the bigger picture again
						</p>
					</div>
					<div className='descriptionList'>
						<div className='listPointBox'>02</div>
						<h3>Advances built-in reports</h3>
						<p>
							Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps
							you build out the reports you need to keep key stakeholders informed.
						</p>
					</div>
					<div className='descriptionList'>
						<div className='listPointBox'>03</div>
						<h3>Everything you need in one place</h3>
						<p>
							Stop jumping from one service to another to communicate, store files, track tasks and share documents.
							Manage offers on all-on-one team productivity soultion.
						</p>
					</div>
				</div>

				<img src={bcgElement} className='backgroundElement_2'></img>
			</div>
		</section>
	)
}
