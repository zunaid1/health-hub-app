import React from 'react';
import { Link, Navigate } from 'react-router';

const EmptyState = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center p-6">
			<h1 className="text-3xl font-bold text-red-700 mb-4">No Data Found</h1>
			<p className="text-gray-600 mb-6">
				It looks like there's no saved data available right now.
			</p>
			{/* <button
				onClick={() => Navigate("/")}
				className="bg-red-300 text-red-800 border border-red-800 px-6 py-3 rounded-md font-semibold hover:bg-red-400 transition"
			>
				Go to Homepage
			</button> */}


			<Link to='/'>
				<button className="bg-red-300 text-red-800 border border-red-800 px-6 py-3 rounded-md font-semibold hover:bg-red-400 transition"
				> Go to Homepage
				</button>
			</Link>


		</div>
	);
};

export default EmptyState;