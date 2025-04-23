import DoctorCard from './DoctorCard'
import React from 'react';

const DoctorContainer = ({ doctors }) => {

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
					doctors.map(doctor => < DoctorCard key={doctor.id}
						doctor={doctor}
					/>)
				}


				 
				 



				<button className='px-15 col-span-full mx-auto text-center btn btn-primary text-white bg-[#176AE5]  rounded-3xl mt-2.5 md:mt-0 lg:mt-0'>Show All</button>

			</div>
		</div>
	);
};

export default DoctorContainer;