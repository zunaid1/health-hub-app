import React, { useState } from 'react';
import Hero from '../components/Hero';
import DoctorContainer from '../components/DoctorContainer';
import { useLoaderData } from 'react-router';
//import ReactStats from '../components/ReactStats';
import SuccessSection from '../components/SuccessSection';


const Home = () => {
	//data
	const data =useLoaderData()
	const [doctor, setDoctor] = useState(data);



	const handleSearch = (e, text) => {
		e.preventDefault();

		if(text === '') return setDoctor(data)
		const searchedDoctor = data.filter(doctor =>
			doctor?.Name?.toLowerCase().split(' ').includes(text.toLowerCase())
			|| doctor?.Speciality?.toLowerCase().split(' ').includes(text.toLowerCase())



		)
		console.log(searchedDoctor);
		setDoctor(searchedDoctor)
	}

	return (
		<div className=''>
			<Hero handleSearch={handleSearch}></Hero>
			<DoctorContainer doctors={doctor}></DoctorContainer>
			<SuccessSection></SuccessSection>


		</div>
	);
};

export default Home;