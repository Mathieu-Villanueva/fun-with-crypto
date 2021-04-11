import React from 'react';
import Block from '../components/Bloc/Bloc';
import Header from '../components/Header';
import {block} from '../data'

const About = () => {
	return (
		<>
		<Header />
		<div className="page-about">
			<div className="background"></div>
				{block.map((element) => (
					<Block key={element.id} {...element}/>
				))}
		</div>
		</>
	);
};

export default About;