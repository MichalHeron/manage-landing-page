import React, { useEffect, useState } from 'react'
import '../style/Contents.scss'
import { useMediaQuery } from 'react-responsive'

export default function CommentsSection() {
	const isDesktop = useMediaQuery({ query: '(min-width:900px' })

	const [currentProfileId, setCurrentProfileId] = useState(1)

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

	useEffect(() => {
		const interval = setInterval(() => {
			const newProfileId = (currentProfileId === users.length) ? 1 : currentProfileId + 1
			setCurrentProfileId(newProfileId)
		}, 2000)
		return () => clearInterval(interval)
	}, [currentProfileId])

	//https://reactcommunity.org/react-transition-group/

	function Card(props) {
		let translatexValue = ((props.level - currentProfileId) * 110)
		return (
			<>
				<div className='card' style={{ transform: `translateX(${translatexValue}%)`}}>
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

	function GenerateItem() {
		let items = []
		users.forEach(e => {
			items.push(<Card name={e.name} avatar={e.img} comment={e.comment} key={e.key} level={e.key} />)
		})
		return items
	}

	return (
		<section className='comments'>
			<h2>What they've said</h2>
			<div className={(!isDesktop && 'commentsBox one') || 'commentsBox three'}>
				<GenerateItem />
				{/* 
				<Card name={users[0].name} avatar={users[0].img} comment={users[0].comment} key={users[0].key} />
				<Card name={users[0].name} avatar={users[0].img} comment={users[0].comment} key={users[0].key} /> */}
				{/* {users.map(user => {
					return <Card name={user.name} avatar={user.img} comment={user.comment} key={user.key} />
				})} */}
			</div>
			<button className='getStarted'>Get Started</button>
		</section>
	)
}
