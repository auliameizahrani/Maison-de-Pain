import {ShoppingBag} from 'lucide-react';

export default function Navbar({activePage, setActivePage}) {
    const navItems = [
        {name: 'Home', id: 'home'},
        {name: 'Menu', id: 'menu'},
        {name: 'Services', id: 'services'},
        {name: 'About', id: 'about'},
        {name: 'Contact', id: 'contact'},
    ];

    const handleNavClick = (id) => {
        setActivePage(id);
        window.scrollTo({top:0, behavior: 'smooth'});
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#121111]/95 backdrop-blur-md border-b border-white/10 text-white">
            <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
                <button
                onClick={() => handleNavClick('home')}
                className="text-2xl font-serif font bold tracking-wide text-white text-left shrink-0">
                    Maison de Pain <span className="text-[#C88A58]">.</span>
                </button>

                <div className="hidden md:flex flex-1 justify-center space-x-10 text-xs uppercase tracking-widest font-medium">
                    {navItems.map((item) => (
                        <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`transition-colors py-1 border-b-2 ${
                            activePage === item.id
                                ? 'text-[#C88A58] border-[#C88A58]'
                                : 'text-gray-300 border-transparent hover:text-[#C88A58]'
                            }`}>
                                {item.name}
                            </button>
                    ))}
                </div>

                <button
                onClick={() => handleNavClick('menu')}
                className="bg-[#C88A58] hover:bg-[#a66f43] text-white text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-sm flex items-center gap-2 transition-all shadow-sm shrink-0">
                    <ShoppingBag className="w-4 h-4"/>
                    <span>Order Now</span>
                </button>
            </div>
        </nav>
    )
}