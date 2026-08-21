export default function PageHeader({title}) {
    const getHeaderData = (page) => {
        switch (page.toLowerCase()) {
            case 'menu':
                return {
                    subtitle: 'Enjoy Fresh Bread & Pastry Choices Every Day',
                    bgImage: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1920&q=80'
                };
            case 'services':
                return {
                    subtitle: 'The Best Kitchen Service for a Perfect Taste Experience',
                    bgImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80'
                };
            case 'about':
                return {
                    subtitle: 'The Stories, Dedication, and Master Bakers Behind Our Kitchen',
                    bgImage: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1920&q=80'
                };
            case 'contact':
                case 'contact us':
                return {
                    subtitle: 'Connect with Us and Visit Our Kitchen',
                    bgImage: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1920&q=80'
                };
            default:
                return{
                    subtitle: 'Maison de Pain Artisan Bakery',
                    bgImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80'
                };
        }
    }

    const { subtitle, bgImage } = getHeaderData(title);

    return (
        <div className="relative w-full h-[calc(100vh-73px)] bg-[#121111] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10"/>
            <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-50 z-0" />

            <div className="relative z-20 space-y-3 px-4 w-full max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase m-0 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h1>

                <p className="text-xs md:text-sm text-[#E8C39E] font-light tracking-wider max-w-xl mx-auto"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{subtitle}</p>
            </div>
        </div>
    );
}