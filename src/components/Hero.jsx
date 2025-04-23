import React from 'react';
import heroimg1 from '../assets/banner-img-1.png';


const Hero = () => {
	return (
		<div className='space-x-4 border-3 border-white rounded-2xl overflow-auto'>
			<h1 className='text-2xl md:text-4xl font-bold text-center'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
			<p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

			 <form className='mx-auto w-2/3 space-x-2 flex justify-center items-center my-4 flex-col md:flex-row lg:flex-row' >
				<input type="text" 
				className='bg-white text-gray-800 w-full md:w-2/3 p-2 rounded-2xl 
				focus:outline-dashed focus:outline-2 focus:outline-indigo-600'
				placeholder='Search By Doctor.'
				/> 
				<button className='btn btn-primary text-white bg-[#176AE5]  rounded-3xl mt-2.5 md:mt-0 lg:mt-0'>Search Now</button>
			 </form>
			 <div className='flex flex-col md:flex-row lg:flex-row  overflow-auto gap-4 items-center justify-center '>
				<img className='w-full md:w-5/12 rounded' src={heroimg1} alt="" />
				<img className='w-full md:w-5/12 rounded' src={heroimg1} alt="" />

			 </div>
		</div>
	);
};

export default Hero;