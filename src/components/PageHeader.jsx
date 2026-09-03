import { usePageHeader } from '../hooks/usePageHeader';

export default function PageHeader({title}) {
    const { subtitle, bgImage } = usePageHeader(title);

    return (
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[calc(100vh-73px)] bg-[#121111] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            
            <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-50 z-0" />

            <div className="relative z-20 space-y-3 px-6 sm:px-8 w-full max-w-4xl">
                <h1
                    className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-wider sm:tracking-widest uppercase m-0 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {title}
                </h1>

                <p
                    className="text-xs sm:text-sm text-[#E8C39E] font-light tracking-wide sm:tracking-wider max-w-xl mx-auto px-4"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                    {subtitle}
                </p>
            </div>
        </div>
    );
}