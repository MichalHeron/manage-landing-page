import React, { useEffect, useState, useRef } from 'react'
import '../style/Carousel.scss'
import { TransitionGroup } from 'react-transition-group'
import { CSSTransition } from 'react-transition-group'

export default function Carousel() {
	const [active, setActive] = useState(0)
	const [direction, setDirection] = useState('left')
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	// const nodeRef = useRef(null)

	// function Item(props) {
	// 	let className = 'item level' + props.level
	// 	return <div  className={className}>{props.id}</div>
	// }
	function GenerateItems() {
		let itemsActive = []
		let level
		console.log(active)
		for (let i = active - 2; i < active + 3; i++) {
			let index = i
			if (i < 0) {
				index = items.length + i
			} else if (i >= items.length) {
				index = i % items.length
			}
			let nodeRef = useRef(null)
			level = active - i
			let className = 'item level' + level + " " + direction
			// id={items[index]} level={level}
			console.log(nodeRef);
			console.log(className);
			itemsActive.push(
				// <CSSTransition className={className} key={index} timeout={1000} nodeRef={nodeRef} in="true">
				// 	{/* <Item  /> */}
				// 	{/* <div ref={nodeRef}> */}
				// 	<div ref={nodeRef} >{items[index]}</div>
					
				// 	{/* </div> */}
				// </CSSTransition>
				<div ref={nodeRef} className={className}>{items[index]}</div>
			)
		}
		return itemsActive
	}

	function LeftClick() {
		let newActive = active - 1
		setActive(() => (newActive < 0 ? items.length - 1 : newActive))
		setDirection('left')
		// this.setState({
		//     active: newActive < 0 ? this.state.items.length - 1 : newActive,
		//     direction: 'left'
		// })
	}

	function RightClick() {
		let newActive = active
		setActive(() => (newActive + 1) % items.length)
		setDirection('right')
	}

	return (
		<div id='carousel' className='noselect'>
			<div className='arrow arrow-left' onClick={LeftClick}>
				<i className='fi-arrow-left'></i>
			</div>
			<TransitionGroup>
				<GenerateItems />
				{/* <CSSTransition className={"item"} key={1} timeout={500} nodeRef={nodeReff}>
					<div ref={nodeReff} >{1}</div>
				</CSSTransition> */}
			</TransitionGroup>
			<div className='arrow arrow-right' onClick={RightClick}>
				<i className='fi-arrow-right'></i>
			</div>
		</div>
	)
}
