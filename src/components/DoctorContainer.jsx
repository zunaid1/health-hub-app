import DoctorCard from './DoctorCard'
import React from 'react';

const DoctorContainer = ({ doctors }) => {

	console.log(doctors)
	return (
		<div className='py-12'>

			Doctor Container : {doctors.length}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8'>
				{
					doctors.map(doctor => < DoctorCard key={doctor.id}
						doctor={doctor}
					/>)
				}


				 
				 


				<button>Show All</button>
			</div>
		</div>
	);
};

export default DoctorContainer;