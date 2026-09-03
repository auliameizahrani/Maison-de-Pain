import { useState } from 'react';
import { z } from 'zod';

const bookingSchema = z.object({
    name: z.string().min(1, 'This field is required!'),
    phone: z.string().min(1, 'This field is required!'),
    email: z.string().min(1, 'This field is required!').refine((val) => val === '' || z.string().email().safeParse(val).success, {
        message: 'Invalid email format',
    }),
    persons: z.string().min(1, 'This field is required!'),
    date: z.string().min(1, 'This field is required!'),
});

export function useContactForm() {
    const [bookingData, setBookingData] = useState({
        name: '',
        phone: '',
        email: '',
        persons: '',
        date: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setBookingData((prev) => ({ ...prev, [field]: value }));
        
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const result = bookingSchema.safeParse(bookingData);

        if (!result.success) {
            const formattedErrors = {};
            result.error.issues.forEach((err) => {
                const prop = err.path[0];
                formattedErrors[prop] = err.message;
            });
            
            setErrors({ ...formattedErrors });
            setIsSubmitted(false);
            return;
        }

        setErrors({});
        setIsSubmitted(true);
        setBookingData({ name: '', phone: '', email: '', persons: '', date: '' });
        
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return {
        bookingData,
        errors,
        isSubmitted,
        handleInputChange,
        handleBookingSubmit
    };
}