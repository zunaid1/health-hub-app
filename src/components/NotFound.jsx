import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
			<h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
			<h2 className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
			<p className="text-center mb-6 max-w-md">
				Sorry, the page you’re looking for doesn’t exist or has been moved.
			</p>
			<Link
				to="/"
				className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
			>
				Go Back Home
			</Link>
		</div>
	);
};

export default NotFound;