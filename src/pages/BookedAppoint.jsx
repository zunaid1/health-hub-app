import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { getBooking, removeBooking } from '../utils';
import BookDoctorCard from '../components/BookDoctorCard';
import EmptyState from '../components/ui/EmptyState';
import AppointmentChart from '../components/AppointmentChart';


const BookedAppoint = () => {
	const [displayDoctor, setDisplayDoctors] = useState([])

	useEffect(() => {
		const savedBookedAppoint = getBooking();
		setDisplayDoctors(savedBookedAppoint)
	}, [])


const handleDeleteBooking = id => {
	removeBooking(id);
	setDisplayDoctors(getBooking());

}

	console.log(displayDoctor)

if(displayDoctor.length < 1) return <EmptyState></EmptyState>






	return (
		<div className='py-12'>


			<AppointmentChart displayDoctor={displayDoctor}></AppointmentChart>
			<div className='text-center py-10'>
				<h1 className='font-bold text-2xl md:text-4xl '>My Today Appointments</h1>
				<p>
				Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
				</p>
			</div>


			<div className='mb-3 space-y-3'>
				{
					displayDoctor.map(doctor => < BookDoctorCard 
						
						handleDeleteBooking={handleDeleteBooking}
						key={doctor.id}
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