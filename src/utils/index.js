
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
	toast.success(`${doctor.Name} Booked Successfully!`)
}


// export const removeFavorite = id => {
//   let favorites = getFavorites()
//   const remaining = favorites.filter(b => b.id !== id)
//   localStorage.setItem('favorites', JSON.stringify(remaining))
//   toast.success('Phone Removed from Favorite List!')
// }

// export const getCart = () => {
//   let cart = []
//   const storedCart = localStorage.getItem('cart')
//   if (storedCart) {
//     cart = JSON.parse(storedCart)
//   }
//   return cart
// }
// export const addToCart = phone => {
//   let cart = getCart()
//   const isExist = cart.find(b => b.id === phone.id)
//   if (isExist) return toast.error('Already Added!')

//   cart.push(phone)
//   localStorage.setItem('cart', JSON.stringify(cart))
//   toast.success('Cart Updated!')
// }
