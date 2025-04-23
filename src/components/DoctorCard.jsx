import React from 'react';
import { FaRegRegistered } from 'react-icons/fa';



const DoctorCard = ({ doctor }) => {
	const { Doctor_image } = doctor

	return (
		<div className="card bg-base-100 shadow-sm">
			<figure className="px-10 pt-10">
				<img
					src={Doctor_image}
					alt="Shoes"
					className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<div className='flex justify-start items-center gap-4'>
					<span className='p-2 rounded-4xl border border-[#09982F] text-[#079c2c] bg-green-50'>Available</span>
					<span className='p-2 rounded-4xl border border-[#176AE5] text-[#176AE5] bg-[#176AE5]/20'>5+ Years Experience</span>
				</div>
				<h2 className="card-title font-bold">Dr. Cameron Williamson</h2>
				<h3 className='text-gray-400'>MBBS, MD - General Medicine, DNB</h3>

				<hr class="border-t-[2px] border-dashed border-[#0F0F0F]/20 w-full" />

				<div className='flex justify-center items-center gap-2'>
					<FaRegRegistered className="text-gray-500 text-sm" />
					<span className='text-[#0F0F0F]/70'>Reg No: BD 12451254</span>
				</div>

				<div className="card-actions">


				</div>
			
				<button className="btn btn-outline w-3/4 rounded-2xl text-[#176AE5] border-[#176AE5] hover:bg-[#176AE5] hover:text-white font-bold">
  View Details
</button>

			</div>
		</div>
	);
};


export default DoctorCard;