import React, { useState } from 'react';
import { BookingContext } from './Contexts';

const BookingProvider = ({children}) => {
 const [booking, setBooking] = useState([6465])

	return <BookingContext.Provider value={{booking, setBooking}}>
			{children}
	</BookingContext.Provider>
};

export default BookingProvider;