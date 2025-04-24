import React from 'react';
import { IoTrashBinSharp } from "react-icons/io5";
import { removeBooking } from '../utils';


const BookDoctorCard = ({ doctor, handleDeleteBooking }) => {
	const { Doctor_image, Available_Days, Experience, Name, Education, Speciality, Registration_Number, Consultation_Fee, id } = doctor;

	return (
		<div className="">

			<div className="w-full bg-white shadow  rounded-2xl flex flex-col space-y-5 p-8">
				<h2 className="mt-5 text-2xl mb-2 font-bold">{Name}</h2>
				<div className='flex justify-between items-center'>
					<p className="text-gray-500 max-w-xl mx-auto">{`${Education}-${Speciality}`}</p>
					<p className="text-gray-500 max-w-xl mx-auto">Appointment Fee : {Consultation_Fee} Taka + Vat	</p>
				</div>



				<button
					onClick={() => handleDeleteBooking(id)}
					className="bg-red-50 text-red-800 font-semibold py-2 px-4 rounded-4xl border border-red-800 hover:bg-red-500 hover:text-white  transition">
					Cancel Appointment
				</button>
				{/* <Toaster /> */}



			</div>

		</div>
	);
};

export default BookDoctorCard;