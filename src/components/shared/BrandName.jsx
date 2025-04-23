import React from 'react';
import logo from '../../assets/logo.png'

const BrandName = () => {
	return (
		<div className='flex  space-x-2 items-center justify-center '>
			<img className='w-8 h-8 md:w-10 md:h-10' src={logo}></img>
			<h1 className='text-2xl md:text-4xl font-bold'>
				<span>Health</span>
				<span>Hub</span>
			</h1>
		</div>
	);
};

export default BrandName;