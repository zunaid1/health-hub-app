import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// const data = [
// 	{
// 		name: 'Page A',
// 		uv: 4000,
// 		pv: 2400,
// 		amt: 2400,
// 	}
// ];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
	return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
	${x + width / 2}, ${y}
	C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
	Z`;
};


const TriangleBar = (props) => {
	const { fill, x, y, width, height } = props;

	return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};





const AppointmentChart = ({ displayDoctor }) => {

	console.log(displayDoctor)

	const data = displayDoctor.map((doctor) => ({
		...doctor,
		Consultation_Fee: parseInt(doctor.Consultation_Fee),
	}));
	console.log(displayDoctor)
	return (
		<div>
			Rechart


			<div className='w-full max-w-full overflow-x-auto'>
			<ResponsiveContainer width="100%" height={400}>

				<BarChart
					width={1000}
					height={400}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="Name" />
					<YAxis />
					<Bar dataKey="Consultation_Fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
						{data?.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={colors[index % 20]} />
						))}
					</Bar>
				</BarChart>
				</ResponsiveContainer>

			</div>



		</div>
	);
};

export default AppointmentChart;

