import { useHero } from '../hooks/useHero';

export default function Hero() {
    const { slides, currentSlide, setCurrentSlide } = useHero();

    return (
        <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}
                    style={{ transitionDuration: '1000ms' }}
                >
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img src={slide.bgImage} alt={slide.title} className="w-full h-full object-cover" />
                </div>
            ))}

            <div className="relative z-20 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-6 pb-16">
                <span
                    className="text-3xl md:text-5xl text-[#E8C39E] mb-3 tracking-wide"
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                    {slides[currentSlide].subtitle}
                </span>

                <h1
                    className="text-3xl md:text-6xl font-bold text-white tracking-widest leading-tight uppercase mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {slides[currentSlide].title}
                </h1>

                <p
                    className="text-sm md:text-base text-gray-200 max-w-2xl font-light leading-relaxed mb-8"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                    {slides[currentSlide].description}
                </p>

                <div className="flex gap-4">
                    <a
                        href="#menu"
                        className="bg-[#C88A58] hover:bg-[#a66f43] text-white px-8 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105 cursor-pointer"
                    >
                        Order Now
                    </a>
                    <a
                        href="#menu"
                        className="border border-white/80 text-white hover:bg-white hover:text-black px-8 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-widest transition-all hover:scale-105 cursor-pointer"
                    >
                        View Menu
                    </a>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                            idx === currentSlide
                                ? 'bg-[#C88A58] scale-125 ring-2 ring-white/50'
                                : 'bg-white/40 hover:bg-white/80'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}