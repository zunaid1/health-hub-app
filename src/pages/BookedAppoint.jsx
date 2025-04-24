import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { getBooking } from '../utils';
import BookDoctorCard from '../components/BookDoctorCard';

const BookedAppoint = () => {
	const [displayDoctor, setDisplayDoctors] = useState([])

	useEffect(() => {
		const savedBookedAppoint = getBooking();
		setDisplayDoctors(savedBookedAppoint)
	}, [])


	return (
		<div className='py-12'>
			<div className='text-center py-10'>
				<h1 className='font-bold text-2xl md:text-4xl '>My Today Appointments</h1>
				<p>
				Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
				</p>
			</div>


			<div className='mb-3 space-y-3'>
				{
					displayDoctor.map(doctor => < BookDoctorCard key={doctor.id}
						doctor={doctor}
					/>)
				}



				{/* <button onClick={() => {
					setShowAll(prv => !prv)
					if(showAll) window.scrollTo(0, 400)
				}} className='px-15 col-span-full mx-auto text-center btn btn-primary text-white bg-[#176AE5]  rounded-3xl mt-2.5 md:mt-0 lg:mt-0'>{showAll? 'Show Less' : 'Show All'}</button> */}

			</div>
		</div>
	);
};

export default BookedAppoint;