import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const HeroSection = ({ blok }) => {
	return (
		<div className="hero-section" {...storyblokEditable(blok)}>
			<div className="container" style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
					<h1>{blok.Title}</h1>
					<p>{blok.Description}</p>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}><img src={blok.Image} alt="Hero Image"></img></div>
			</div>
		</div>
	);
};

export default HeroSection;
