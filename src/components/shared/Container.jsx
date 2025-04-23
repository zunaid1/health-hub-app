import React from 'react';

const Container = ({ children }) => {
	return (
		<div className='max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-24 mx-auto bg-gradient-to-b from-gray-300 to-gray-100'>
			{children}
		</div>
	)
}

export default Container