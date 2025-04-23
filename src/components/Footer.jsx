import React from 'react';
import BrandName from './shared/BrandName';
import { FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
	return (
		<div className='w-full bg-gray-500  text-center p-4 flex flex-col justify-center items-center space-y-2'>
			<BrandName></BrandName>
			<div className="navbar-center  lg:flex">
				<ul className='menu menu-horizontal px-1  lg:flex'>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'text-indigo-500 border-b-3 border-indigo-500 ' : '')}
							to='/'
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'text-indigo-500 border-b-3 border-indigo-500 ' : '')}
							to='/doctor-details'
						>
							My-Bookings
						</NavLink>
					</li>


				</ul>
			</div>
			<div className='flex space-x-4'>
				<FaFacebook className='text-blue-600 text-2xl' />
				<FaTwitter className='text-blue-800 text-2xl' />
				<FaLinkedin className='text-blue-900 text-2xl' />
				<FaYoutube className='text-red-500 text-2xl' />


			</div>
		</div>
	);
};

export default Footer;