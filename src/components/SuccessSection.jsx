import React from 'react';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Import your local images
import doctorIcon from '../assets/success-doctor.png';
import reviewIcon from '../assets/success-review.png';
import patientIcon from '../assets/success-patients.png';
import staffIcon from '../assets/success-staffs.png';

const SuccessSection = () => {

	const successData = [
		{
			label: 'Total Doctors',
			value: 199,
			suffix: '+',
			imgSrc: doctorIcon,
		},
		{
			label: 'Total Reviews',
			value: 467,
			suffix: '+',
			imgSrc: reviewIcon,
		},
		{
			label: 'Patients',
			value: 1900,
			suffix: '+',
			imgSrc: patientIcon,
		},
		{
			label: 'Total Stuffs',
			value: 300,
			suffix: '+',
			imgSrc: staffIcon,
		},
	];

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});



	return (
		<div>
			{/* success-caption */}
			<div className='text-center space-y-3'>
				<h1 className='text-4xl font-bold'>We Provide Best Medical Service</h1>
				<p className='text-gray-700 text-xl'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

			</div>

			<div
			ref={ref}
			className="grid grid-cols-1 md:grid-cols-4  gap-6 text-center py-12"
		>
			{successData.map((stat, index) => (
				<div
					key={index}
					className="p-6 bg-white rounded-xl shadow flex flex-col items-center"
				>
					<img
						src={stat.imgSrc}
						alt={stat.label}
						className="w-12 h-12 mb-4"
					/>
					<h2 className="text-4xl font-bold text-blue-600">
						{inView ? (
							<CountUp end={stat.value} duration={2} suffix={stat.suffix} />
						) : (
							'0'
						)}
					</h2>
					<p className="text-lg mt-2 text-gray-700">{stat.label}</p>
				</div>
			))}
		</div>
		</div>
	);
};

export default SuccessSection;