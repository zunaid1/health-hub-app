import DoctorCard from './DoctorCard'
import React, { useEffect, useState } from 'react';

const DoctorContainer = ({ doctors }) => {
	const [displayDoctor, setDisplayDoctors] = useState([])
	const [showAll, setShowAll] = useState(false)




	useEffect(() => {
		if (showAll) {
			setDisplayDoctors(doctors)
		}
		else {
			setDisplayDoctors(doctors.slice(0, 6))
		}


	}, [doctors, showAll])


	console.log(doctors)
	return (
		<div className='py-12'>
			<div className='text-center py-10'>
				<h1 className='font-bold text-2xl md:text-4xl '>Our Best Doctors</h1>
				<p>
					Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
				</p>
			</div>


			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8'>
				{
					displayDoctor.map(doctor => < DoctorCard key={doctor.id}
						doctor={doctor}
					/>)
				}

			 
				 
				<button onClick={() => {
					setShowAll(prv => !prv)
					if(showAll) window.scrollTo(0, 400)
				}} className='px-15 col-span-full mx-auto text-center btn btn-primary text-white bg-[#176AE5]  rounded-3xl mt-2.5 md:mt-0 lg:mt-0'>{showAll? 'Show Less' : 'Show All'}</button>

			</div>
		</div>
	);
};

export default DoctorContainer;