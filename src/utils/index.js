
export default function checkAvailability(availableDays) {
	const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

	return availableDays.includes(today) ? "Available" : "Unavailable";
}