import { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        subtitle: "Welcome",
        title: "WE BAKED YOUR DESIRED ARTISAN BREAD",
        description: "Enjoy the warmth of high-quality fresh bread made with organic ingredients and full of love every day.",
        bgImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80"
    },
    {
        id: 2,
        subtitle: "Delicious & Fresh",
        title: "HANDMADE FRENCH PASTRIES & CROISSANTS",
        description: "Crispy, multi-layered pastry made with high-quality pure butter that melts perfectly with every bite.",
        bgImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1920&q=80"
    },
    {
        id: 3,
        subtitle: "Sweet Perfection",
        title: "ELEGANT CAKES FOR YOUR SPECIAL MOMENTS",
        description: "Make precious moments with your loved ones perfect with our handcrafted cakes.",
        bgImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1920&q=80"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-[6000ms]' : 'opacity-0 scale-100'
                    }`}>
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img src={slide.bgImage} alt={slide.title} className="w-full h-full object-cover" />
                </div>
            ))}

            <div className="relative z-20 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-6 pb-16">
                <span
                    className="text-3xl md:text-5xl text-[#E8C39E] mb-3 tracking-wide"
                    style={{ fontFamily: "'Great Vibes', cursive" }} >
                    {slides[currentSlide].subtitle}
                </span>

                <h1
                    className="text-3xl md:text-6xl font-bold text-white tracking-widest leading-tight uppercase mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }} >
                    {slides[currentSlide].title}
                </h1>

                <p
                    className="text-sm md:text-base text-gray-200 max-w-2xl font-light leading-relaxed mb-8"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {slides[currentSlide].description}
                </p>

                <div className="flex gap-4">
                    <a
                        href="#menu"
                        className="bg-[#C88A58] hover:bg-[#a66f43] text-white px-8 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">Order Now</a>
                    <a
                        href="#menu"
                        className="border border-white/80 text-white hover:bg-white hover:text-black px-8 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-widest transition-all hover:scale-105">View Menu</a>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            idx === currentSlide
                                ? 'bg-[#C88A58] scale-125 ring-2 ring-white/50'
                                : 'bg-white/40 hover:bg-white/80'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}