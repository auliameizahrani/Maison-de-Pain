import { useState } from 'react';

export function useContactForm() {
    const [bookingData, setBookingData] = useState({
        name: '',
        phone: '',
        email: '',
        persons: '',
        date: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setBookingData((prev) => ({ ...prev, [field]: value }));
    };

    const handleBookingSubmit = (e) => {
            e.preventDefault();
            setIsSubmitted(true);
            setBookingData({ name: '', phone: '', email: '', persons: '', date: '' });
            
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        };

        return {
            bookingData,
            isSubmitted,
            handleInputChange,
            handleBookingSubmit
        };
}