import { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        subtitle: "Welcome",
        title: "WE BAKED YOUR DESIRED ARTISAN BREAD",
        description: "Enjoy the warmth of high-quality fresh bread made with organic ingredients and full of love every day.",
        bgImage: "https://images.unsplash.com/photo-1643944471768-2d2eac3afb6d?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        subtitle: "Delicious & Fresh",
        title: "HANDMADE FRENCH PASTRIES & CROISSANTS",
        description: "Crispy, multi-layered pastry made with high-quality pure butter that melts perfectly with every bite.",
        bgImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        subtitle: "Sweet Perfection",
        title: "ELEGANT CAKES FOR YOUR SPECIAL MOMENTS",
        description: "Make precious moments with your loved ones perfect with our handcrafted cakes.",
        bgImage: "https://images.unsplash.com/photo-1711141326113-e6b607fd78ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

export function useHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return {
        slides,
        currentSlide,
        setCurrentSlide
    };
}