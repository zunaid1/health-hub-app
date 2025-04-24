import React from 'react';
import { FaRegRegistered } from 'react-icons/fa';
import { Link } from 'react-router'


function checkAvailability(availableDays) {
	const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

	return availableDays.includes(today) ? "Available" : "Unavailable";
}




const DoctorCard = ({ doctor }) => {
	const { Doctor_image, Available_Days, Experience, Name, Education, Speciality, Registration_Number, id } = doctor;

	const status = checkAvailability(Available_Days);
	//console.log(status);



	//console.log(Available_Days)

	return (
		<div className="card bg-base-100 shadow-sm">
			<figure className="px-10 pt-10">
				<img 
					src={Doctor_image}
					alt="Shoes"
					className="w-50 h-50 rounded-full" />
			</figure>
			<div className="card-body items-center text-center">
				<div className='flex justify-start items-center gap-4'>
					<span className={`p-2 rounded-2xl border 
  					${status === 'Available'
							? 'border-[#09982F] text-[#079c2c] bg-green-50'
							: 'border-red-400 text-red-500 bg-red-100'}`}>
						{status}
					</span>



					<span className='p-2 rounded-4xl border border-[#176AE5] text-[#176AE5] bg-[#176AE5]/20'>{Experience} Experience</span>
				</div>
				<h2 className="card-title font-bold">{Name}</h2>
				<h3 className='text-gray-400'>{Education} - {Speciality}</h3>

				<hr className="border-t-[2px] border-dashed border-[#0F0F0F]/20 w-full" />

				<div className='flex justify-center items-center gap-2'>
					<FaRegRegistered className="text-gray-500 text-sm" />
					<span className='text-[#0F0F0F]/70'> {Registration_Number}</span>
				</div>

				<div className="card-actions">


				</div>

			
				<Link to='/doctor-details' className='w-full'>
				<button className="btn btn-outline w-3/4 rounded-2xl text-[#176AE5] border-[#176AE5] hover:bg-[#176AE5] hover:text-white font-bold">
						View Details
					</button>
				</Link>


			</div>
			<div className=' absolute -top-2 -right-2 bg-blue-200 w-12 h-12 rounded-full flex justify-center items-center text-2xl text-blue-800 font-bold'>
				<h1>{id}</h1>
			</div>
		</div>
	);
};


export default DoctorCard;