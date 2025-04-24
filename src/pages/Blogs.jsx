import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
	//data
	const data = useLoaderData()
	const [doctor, setDoctor] = useState(data)

	console.log(data)
	const { id, Question, answer, AddedDate } = doctor


	return (
		<div>
			<div className='text-center py-10'>
				<h1 className='font-bold text-2xl md:text-4xl '>Our Best Doctors</h1>
				<p>
					Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
				</p>
			</div>
			<div>
				{
					data.map(dt => <p key={id}>{dt.Question}</p>)
				}
			</div>
		</div>
	);
};

export default Blogs;