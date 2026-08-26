import { Globe, Mail } from 'lucide-react';

export default function Footer({ setActivePage }) {
    
    const handleFooterNav = (e, id) => {
        e.preventDefault();
        
        if (setActivePage) {
            setActivePage(id);
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[#3B2F2F] text-[#D1C7BD] pt-16 pb-8 border-t border-[#4A3E3D]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-sm">

                <div className="space-y-4">
                    <h4 className="text-white font-serif font-bold text-2xl tracking-wide">
                        Maison de Pain<span className="text-[#C88A58]">.</span>
                    </h4>
                    <p className="leading-relaxed text-xs text-[#A89C92]">
                        Bringing the warmth of traditional French artisan bread flavors to your table every day. Made with organic ingredients and love.
                    </p>

                    <div className="flex gap-3 pt-2 text-white">
                        <a href="#" className="w-8 h-8 rounded-full bg-[#4A3E3D] flex items-center justify-center hover:bg-[#C88A58] transition-colors" aria-label="Instagram">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-[#4A3E3D] flex items-center justify-center hover:bg-[#C88A58] transition-colors" aria-label="Website">
                            <Globe className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-[#4A3E3D] flex items-center justify-center hover:bg-[#C88A58] transition-colors" aria-label="Email">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="space-y-3">
                    <h4 className="text-white font-semibold text-base mb-2">Opening Hours</h4>
                    <div className="text-xs space-y-2 border-l-2 border-[#C88A58] pl-4">
                        <div>
                            <p className="text-white font-medium">Monday - Friday</p>
                            <p className="text-[#A89C92]">07:00 AM - 20:00 PM</p>
                        </div>
                        <div>
                            <p className="text-white font-medium">Saturday - Sunday</p>
                            <p className="text-[#A89C92]">08:00 AM - 21:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h4 className="text-white font-semibold text-base mb-2">Quick Links</h4>
                    <ul className="text-xs space-y-2 text-[#A89C92]">
                        <li>
                            <a href="#home" onClick={(e) => handleFooterNav(e, 'home')} className="hover:text-white transition-colors cursor-pointer">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#services" onClick={(e) => handleFooterNav(e, 'services')} className="hover:text-white transition-colors cursor-pointer">
                                Our Services
                            </a>
                        </li>
                        <li>
                            <a href="#menu" onClick={(e) => handleFooterNav(e, 'menu')} className="hover:text-white transition-colors cursor-pointer">
                                Bakery Menu
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => handleFooterNav(e, 'contact')} className="hover:text-white transition-colors cursor-pointer">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-xs text-[#8A7D73] mt-12 pt-6 border-t border-[#4A3E3D]">
                &copy; {new Date().getFullYear()} Maison de Pain Bakery. All rights reserved.
            </div>
        </footer>
    );
}