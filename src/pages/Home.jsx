import React from 'react';
import Hero from '../components/Hero';
import DoctorContainer from '../components/DoctorContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
	//data
	const data =useLoaderData()
	//console.log(data)


	return (
		<div className=''>
			<Hero></Hero>
			<DoctorContainer doctors={data}></DoctorContainer>


		</div>
	);
};

export default Home;