import React from 'react';

const Button = ({ label, type, onClick }) => {
	return (

		<button
			onClick={onClick}
			type={type}
			className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
			{label}
		</button>
	);
};

export default Button;