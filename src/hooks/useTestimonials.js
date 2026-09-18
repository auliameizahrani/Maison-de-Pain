import { useState, useEffect } from 'react';

const testimonialPages = [
    [
        {
            id: 1,
            name: "Charlotte Blake",
            role: "Verified Customer",
            comment: "Catering our office party of 50 people and everything was flawless. Fresh, delicious, on time and well presented.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            name: "Seraphina Smith",
            role: "Verified Customer",
            comment: "Honestly the best pastries I've ever had. The crust is incredible - perfectly crispy edges, and buttery inside!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            name: "William Scott",
            role: "Verified Customer",
            comment: "Ordered delivery and the food arrived hot and fresh in 22 minutes. Portions are generous and high quality.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ],
    [
        {
            id: 4,
            name: "Mateo Welber",
            role: "Verified Customer",
            comment: "The ambiance inside the shop is so cozy. It feels like stepping into a traditional Parisian café right in Jakarta.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            name: "Serena Lindstrom",
            role: "Verified Customer",
            comment: "Their custom cakes are out of this world! Ordered a birthday cake and all my friends kept asking where it was from.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            name: "Liam van Dijk",
            role: "Verified Customer",
            comment: "A hidden gem for coffee and croissant lovers. I come here every single Friday morning without fail.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
];

export function useTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialPages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return {
        testimonialPages,
        currentIndex,
        setCurrentIndex,
        currentTestimonials: testimonialPages[currentIndex]
    };
}