
export default function checkAvailability(availableDays) {
	const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

	return availableDays.includes(today) ? "Available" : "Unavailable";
}



import toast from 'react-hot-toast'

export const getBooking = () => {
	let booking = []
	const storedBooking = localStorage.getItem('book')
	if (storedBooking) {
		booking = JSON.parse(storedBooking)
	}
	return booking
}


export const addBooking = doctor => {
	//console.log(doctor)
	let bookings = getBooking()
	const isExist = bookings.find(b => b.id === doctor.id)
	if (isExist) return toast.error('Already Booked!')

	bookings.push(doctor)
	localStorage.setItem('book', JSON.stringify(bookings))
	console.log(`${doctor.Name} Booked Successfully!`);
	toast.success(`${doctor.Name} Booked Successfully!`)
}


export const removeBooking = id => {
	let bookings = getBooking()
	const remaining = bookings.filter(b => b.id !== id)
	localStorage.setItem('book', JSON.stringify(remaining))
	console.log('Removed from Booked List!');

	toast.success('Removed from Booked List!')
}
