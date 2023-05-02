import React from 'react'
import '../style/Contents.scss'
import { useMediaQuery } from 'react-responsive'

export default function CommentsSection() {
	const isDesktop = useMediaQuery({ query: '(min-width:900px' })

	const users = [
		{
			img: '',
			name: 'Anisha Li',
			comment:
				"Manage has supercharged our team's workflow. The ability to maintain visbility on larger milestones at all times keeps everyone motivated",
		},
	]

	function Card(props) {
		return (
			<>
				<div className='card'>{props.name}</div>
			</>
		)
	}

	function Carousel_1() {
		return (
			<>
				<div>
					<Card name={users[0].name} avatar={users[0].img} comment={users[0].comment} />
					<p>karuzela 1</p>
				</div>
			</>
		)
	}

	function Carousel_3() {
		return (
			<>
				<p>karuzela 3</p>
			</>
		)
	}

	return (
		<section className='comments'>
			<h2>What they've said</h2>
			<div className='commentsBox'>{(!isDesktop && <Carousel_1 />) || <Carousel_3 />}</div>
			<button className='getStarted'>Get Started</button>
		</section>
	)
}
