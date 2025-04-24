import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import DoctorDetails from '../pages/DoctorDetails';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import BookedAppoint from '../pages/BookedAppoint';



const router = createBrowserRouter([

	{
		path: '/',
		Component: MainLayout,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,
				path: '/',
				Component: Home,
				hydrateFallbackElement: <p>Loading, Please Wait....</p>,
				loader: () => fetch('../doctors.json')
				
			},
			{
				path: '/doctor-details/:id',
				Component: DoctorDetails,
				loader: () => fetch('../doctors.json'),
				hydrateFallbackElement: <p>Loading, Please Wait....</p>,
			},
			{
				path: '/blog',
				Component: Blogs,
				loader: () => fetch('../blogs.json'),
				hydrateFallbackElement: <p>Loading, Please Wait....</p>,


			},
			{
				path: '/contact',
				Component: Contact
			},
			{
				path: '/doctor-details',
				Component: DoctorDetails
			},
			{
				path: '/mybooked',
				Component: BookedAppoint
			}
		]

	}
])

export default router;