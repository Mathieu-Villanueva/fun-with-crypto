import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';



const Home = () => {


	const [isHidden, sethidden] = useState(true)
	const [isIntroing, setisIntroing] = useState(true)
	const [linkActivated, setLinkActivated] = useState('')
	const [isOutroing, setisOutroing] = useState(false)
	
	const history = useHistory()
	
	useEffect(()=> {
		let mounted = false;

		if (!mounted) {
			const change = () => {
				if (linkActivated) {		
				history.push(linkActivated);
				}
			}
			change()
		}
		return function cleanup(){
			mounted = true
		}
	},[linkActivated, history])

	const handleClick = (event) => {
		event.preventDefault()
		setisOutroing(true)
		setTimeout(() => {
			setLinkActivated(event.target.parentElement.parentNode.attributes[1].value)	
		}, 1100);
	}

	setTimeout(() => {
		sethidden(false)
	}, 250);

	setTimeout(() => {
		setisIntroing(false)
	}, 1500);

	return (
		<div className="page-home">
			<div 
				className={isOutroing ? 'cube activated disabled': 'cube'} >
				<Link
					to='/crypto'
					className={isIntroing ? 'disabled' : ''}
					onClick={handleClick}
				>
					<div className={isHidden ? 'hiddenA': "face a showA"}>
						<span>Crypto</span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</Link>
				<Link 
					to='/about'
					className={isIntroing ? 'disabled' : ''}
					onClick={handleClick}>
					<div className={isHidden ? 'hiddenB' : "face b showB" }>
						<span>About</span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</Link>
				<Link 
					to='/contacts' 
					className={isIntroing ? 'disabled' : ''}
					onClick={handleClick}>
					<div className={isHidden ? 'hiddenC' : "face c showC" }>
						<span>Contact</span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;