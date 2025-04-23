import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import DoctorDetails from '../pages/DoctorDetails';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';



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
				loader: () => fetch('doctors.json'),
				hydrateFallbackElement: <p>Loading, Please Wait....</p>,
			},
			{
				path: '/doctor-details/:id',
				Component: DoctorDetails,
				loader: () => fetch('../doctors.json'),
				hydrateFallbackElement: <p>Loading, Please Wait....</p>,
			},
			{
				path: '/blog',
				Component: Blogs
			},
			{
				path: '/contact',
				Component: Contact
			}
		]

	}
])

export default router;