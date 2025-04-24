import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import checkAvailability, { addBooking } from '../utils';
import Button from '../components/ui/Button';

const DoctorDetails = () => {

	const data = useLoaderData()
	const { id } = useParams();

	const singleDoctor = data.find(doctor => doctor.id === parseInt(id))
	const { Doctor_image, Name, Education, Speciality, Experience, Registration_Number, Available_Days, working_at, Consultation_Fee, About_Doctor } = singleDoctor;


	console.log(singleDoctor)
	//const status = checkAvailability(Available_Days);
	const doctorStatus = checkAvailability(Available_Days);

	const handleBooking =()=> {
		addBooking(singleDoctor)
		//console.log("handle Booking button Clicked....");
	}

	return (
		<div className="bg-gray-50 min-h-screen p-6">
			{/* Doctor’s Profile Details Header */}
			<div className="relative bg-white rounded-xl shadow p-6 mb-6 text-center">
				<h2 className="mt-5 text-2xl mb-2 font-bold">Doctor’s Profile Details</h2>
				<p className="text-gray-500 max-w-xl mx-auto">
					{
						About_Doctor
					}
				</p>

				<div className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-200 w-12 h-12 rounded-full flex justify-center items-center text-2xl text-blue-800 font-bold'>
				<h1>{id}</h1>
			</div>
			</div>

			{/* Doctor Info Card */}
			<div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6 mb-6">
				<img
					src={Doctor_image}
					alt="Doctor"
					className="w-60 h-60 object-cover rounded-2xl border"
				/>

				<div className="flex-1">
					<h3 className="text-xl font-bold">{Name}</h3>
					<p className="text-gray-600">{Education}</p>
					<p className="text-gray-600 mb-2">{Speciality}</p>

					<p className="text-sm text-gray-500">Working at</p>
					<p className="font-semibold mb-2">
						{working_at}
					</p>

					<p className="text-gray-500 text-sm mb-2">
						<strong>Reg No:</strong> {Registration_Number}
					</p>

					<div className="mb-2">
						<strong>Availability: </strong>
						{
							Available_Days.map(day =>
								<span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-3 py-1 rounded-full">{day}
								</span>

							)
						}

					</div>

					<p className="text-sm">
						<strong>Consultation Fee: </strong>
						<span className="text-blue-600 font-semibold">Taka : {Consultation_Fee}</span>
						<span className="text-gray-500"> (Incl. Vat)</span>
						<a href="#" className="text-blue-500 ml-1 text-sm no-underline">
							Per consultation
						</a>
					</p>
				</div>
			</div>

			{/* Book Appointment Section */}
			<div className="bg-white rounded-xl shadow p-6">
				<h3 className="text-lg font-semibold mb-4 text-center">Book an Appointment</h3>

				<div className="flex justify-between items-center mb-4">
					<span className="font-medium">Availability</span>
					 
					{/* availableDays goes here */}
					<span className={`p-2 rounded-2xl border 
  					${doctorStatus === 'Available'
							? 'bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full'
							: 'bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full'}`}>
						{`Doctor ${doctorStatus} Today`}
					</span>



				</div>

				<div className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm rounded-md p-4 mb-4">
					⚠️ Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
				</div>



				<Button onClick={handleBooking}
					label='Book Appointment Now' />



			</div>
		</div>
	);
};

export default DoctorDetails;



