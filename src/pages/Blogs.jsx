import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaRegCalendarAlt } from "react-icons/fa";


const Blogs = () => {
	//data
	const data = useLoaderData()
	const [doctor, setDoctor] = useState(data)

	console.log(data)
	const { id, Question, answer, AddedDate } = doctor


	return (
		<div>
			<div className='text-center py-10'>
				<h1 className='font-bold text-2xl md:text-4xl '>Blogs</h1>
				<p>
				This blog covers essential React concepts including useState, useEffect, custom hooks, controlled vs uncontrolled components, and useFormStatus. It's a quick guide to help developers understand and apply these core features effectively in modern React applications.
				</p>
			</div>
			<div className='flex flex-col gap-5'>
				{
					data.map(dt =>


						<div
							key={id}
							className="w-full bg-white shadow  rounded-2xl flex flex-col space-y-5 p-8">
							<h1 className='font-bold text-xl'>{dt.Question}</h1>
							<hr className="border-t-[2px] border-dashed border-[#0F0F0F]/20 w-full" />
							<p className='text-blue-500 font-bold'>Answer:</p>
							<p className='text-xl'>
								{dt.answer}
							</p>
							<hr className="border-t-[2px] border-dashed border-[#0F0F0F]/20 w-full" />

							<div className='flex gap-3'>
								<FaRegCalendarAlt size={20} className='text-gray-500' />
								<p className='text-gray-500 font-bold'>{dt.AddedDate}</p>
							</div>


						</div>






					)
				}
			</div>
		</div>
	);
};

export default Blogs;