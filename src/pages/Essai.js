import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Essai = () => {
	const [hidden, sethidden] = useState(false)
	const [linkHidden, setlinkHidden] = useState(false)
	//const [linkActivated, setLinkActivated] = useState()
	const [outro, setOutro] = useState(false)
	const BASE = document.baseURI;

	useEffect(()=> {
		console.log(BASE);
	/*	if (linkActivated) {
			const URL = linkActivated.substring(1)
			console.log(BASE + ' ' + URL);
			//window.location.href = `${BASE}${URL}`;
		}*/
	},[/*linkActivated*/BASE])


	const handleClick = (event) => {
		//event.preventDefault()
		setOutro(true)
		//setTimeout(() => {
		//	setLinkActivated(event.target.parentElement.parentNode.attributes[1].value)
		//}, 1000);
	}
 
	setTimeout(() => {
		sethidden(true)
	}, 500);

	setTimeout(() => {
		setlinkHidden(true)
	}, 1500);

	return (
		<div className="page-essai">
			<div className={outro ? 'cube activated': 'cube'} >
				<Link
					to='/crypto'
					className={linkHidden ? '' : 'disabled'}
					onClick={handleClick}
				>
					<div className={hidden ? "face a showA" : 'hiddenA'}>
						<span>Crypto</span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</Link>
				<Link to='/about' className={linkHidden ? '' : 'disabled'}
					onClick={handleClick}>
					<div className={hidden ? "face b showB" : 'hiddenB'}>
						<span>About</span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</Link>
				<Link to='/contacts' className={linkHidden ? '' : 'disabled'}
					onClick={handleClick}>
					<div className={hidden ? "face c showC" : 'hiddenC'}>
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

export default Essai;