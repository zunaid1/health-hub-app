import React from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/shared/Container';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
	return (
		<>
			<Navbar />
			 <Container>
				<div className='min-h-[calc(100vh-117px)] py-8'>
					<Outlet />
				</div>
			</Container> 
			<Footer />
		</>
	);
};

export default MainLayout;