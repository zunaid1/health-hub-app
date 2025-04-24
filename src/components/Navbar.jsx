import React, { useContext } from 'react';
import BrandName from './shared/BrandName';
import { NavLink } from 'react-router';
import { BookingContext } from '../providers/Contexts';
import { RiCalendarScheduleFill } from "react-icons/ri";




const Navbar = () => {
	// const [booking, setBooking] = useState([])

	const { booking } = useContext(BookingContext)
	console.log(booking);






	return (
		<div className="sticky top-0 z-50 navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
								to='/mybooked'
							>
								My-Bookings
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'text-indigo-500 border-b-3 border-indigo-500 ' : '')}
								to='/blog'
							>
								Blog
							</NavLink>
						</li>

						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'text-indigo-500 border-b-3 border-indigo-500 ' : '')}
								to='/contact'
							>
								Contact Us
							</NavLink>
						</li>
					</ul>
				</div>
				{/* <a className="btn btn-ghost text-xl"><BrandName></BrandName></a> */}

				<NavLink className="btn btn-ghost text-xl" to='/'>
				<BrandName></BrandName> 
							</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className='menu menu-horizontal px-1 hidden lg:flex'>
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
							to='/mybooked'
						>
							My-Bookings
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'text-indigo-500 border-b-3 border-indigo-500 ' : '')}
							to='/blog'
						>
							Blog
						</NavLink>
					</li>

					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'text-indigo-500 border-b-3 border-indigo-500 ' : '')}
							to='/contact'
						>
							Contact Us
						</NavLink>
					</li>

				</ul>
			</div>
			<div className="navbar-end">



				<button className='btn btn-primary  text-white bg-[#176AE5] rounded-3xl ml-3'>
					<NavLink to='/contact'>Emergency</NavLink>
				</button>
			</div>
		</div>
	);
};

export default Navbar;