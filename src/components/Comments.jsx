import React, { useEffect, useState } from 'react'
import '../style/Contents.scss'
import { useMediaQuery } from 'react-responsive'

export default function CommentsSection() {
	const isDesktop = useMediaQuery({ query: '(min-width:900px' })

	const [currentProfileId, setCurrentProfileId] = useState(0)

	const users = [
		{
			img: '../../images/avatar-anisha.png',
			name: 'Anisha Li',
			comment:
				"Manage has supercharged our team's workflow. The ability to maintain visbility on larger milestones at all times keeps everyone motivated",
		},
		{
			img: '../../images/avatar-ali.png',
			name: ' Ali Bravo',
			comment:
				'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused',
		},
	]

	useEffect(() => {
		const interval = setInterval(() => {
			const isLastProfile = currentProfileId === users.length - 1
			// console.log(isLastProfile)
			const newProfileId = isLastProfile ? 0 : currentProfileId + 1
			setCurrentProfileId(newProfileId)
		}, 1000)
		return () => clearInterval(interval)
	}, [currentProfileId])

	// const [seconds, setSeconds] = useState(0)

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setSeconds(seconds => seconds + 1)
	// 		// console.log(seconds)
	// 	}, 1000)
	// 	return () => clearInterval(interval)
	// }, [])

	useEffect(() => {
		console.log(currentProfileId)
	}, [currentProfileId])

	function Card(props) {
		return (
			<>
				<div className='card'>
					<div className='name'>{props.name}</div>
					<p className='comment'>"{props.comment}"</p>
					<div
						className='avatar'
						style={{
							backgroundImage: `url(${props.avatar})`,
						}}></div>
				</div>
			</>
		)
	}

	function Carousel_1() {
		return (
			<>
				<div>
					<Card
						name={users[currentProfileId].name}
						avatar={users[currentProfileId].img}
						comment={users[currentProfileId].comment}
					/>
					<p>karuzela 1 {currentProfileId}</p>
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
