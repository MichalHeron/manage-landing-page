import React, { useEffect, useState } from 'react'
import '../style/Contents.scss'
import { useMediaQuery } from 'react-responsive'
import { AnimatePresence, motion, wrap } from 'framer-motion'

export default function CommentsSection() {
	const isDesktop = useMediaQuery({ query: '(min-width:900px' })

	const [currentProfileId, setCurrentProfileId] = useState(0)

	const users = [
		{
			img: '../../images/avatar-anisha.png',
			name: 'Anisha Li',
			comment:
				"Manage has supercharged our team's workflow. The ability to maintain visbility on larger milestones at all times keeps everyone motivated",
			key: 1,
		},
		{
			img: '../../images/avatar-ali.png',
			name: 'Ali Bravo',
			comment:
				'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused',
			key: 2,
		},
		{
			img: '../../images/avatar-richard.png',
			name: 'Richard Watts',
			comment:
				"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to",
			key: 3,
		},
		{
			img: '../../images/avatar-shanai.png',
			name: 'Shanai Gough',
			comment:
				'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive',
			key: 4,
		},
	]

	const imageIndex = wrap(0, users.length, currentProfileId)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentProfileId(currentProfileId + 1)
		}, 4000)
		return () => clearInterval(interval)
	}, [currentProfileId])

	function Card(props) {
		return (
			<>
				<div className='name'>{props.name}</div>
				<p className='comment'>"{props.comment}"</p>
				<div
					className='avatar'
					style={{
						backgroundImage: `url(${props.avatar})`,
					}}></div>
			</>
		)
	}

	// function GenerateItem() {
	// 	let items = []
	// 	let level = currentProfileId
	// 	for (let i = currentProfileId - 1; i < currentProfileId + 2; i++) {
	// 		let index = i
	// 		if (i < 0) {
	// 			index = users.length + i
	// 		} else if (i >= users.length) {
	// 			index = i % users.length
	// 		}
	// 		level = currentProfileId - i
	// 		items.push(
	// 			<Card
	// 				name={users[index].name}
	// 				avatar={users[index].img}
	// 				comment={users[index].comment}
	// 				key={users[index].key}
	// 				level={level}
	// 			/>
	// 		)
	// 	}
	// 	return items
	// }

	const variants = {
		enter: {
			x: 1000,
			opacity: 0,
		},

		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: {
			zIndex: 0,
			x: -1000,
			opacity: 0,
		},
	}

	//   const userIndex = wrap(0, users.length, page)

	return (
		<section className='comments'>
			<h2>What they've said</h2>
			<div className={(!isDesktop && 'commentsBox one') || 'commentsBox three'}>
				<AnimatePresence initial={false}>
					<motion.div
						className='card'
						key={users[imageIndex].img}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 90 },
							opacity: { duration: 0.2 },
						}}>
						<Card
							name={users[imageIndex].name}
							avatar={users[imageIndex].img}
							comment={users[imageIndex].comment}
							key={users[imageIndex].key}
						/>
					</motion.div>
				</AnimatePresence>

				{/* <GenerateItem /> */}

				{/* 
				<Card name={users[1].name} avatar={users[1].img} comment={users[1].comment} key={users[1].key} /> */}
				{/* {users.map(user => {
					return <Card name={user.name} avatar={user.img} comment={user.comment} key={user.key} />
				})} */}
			</div>
			<button className='getStarted'>Get Started</button>
		</section>
	)
}
