import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/useCart';
import { useNavbar } from '../hooks/useNavbar';

export default function Navbar({ activePage, setActivePage }) {
    const { totalItems, setIsCartOpen } = useCart();
    const {
        isMobileMenuOpen,
        navItems,
        handleNavClick,
        toggleMobileMenu
    } = useNavbar(setActivePage);

    return (
        <nav className="sticky top-0 z-50 bg-[#121111]/95 backdrop-blur-md border-b border-white/10 text-white">
            <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
                
                <button
                    onClick={() => handleNavClick('home')}
                    className="text-2xl font-serif font-bold tracking-wide text-white text-left shrink-0 cursor-pointer">
                    Maison de Pain <span className="text-[#C88A58]">.</span>
                </button>

                <div className="hidden md:flex flex-1 justify-center space-x-10 text-xs uppercase tracking-widest font-medium">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`transition-colors py-1 border-b-2 cursor-pointer ${
                                activePage === item.id
                                    ? 'text-[#C88A58] border-[#C88A58]'
                                    : 'text-gray-300 border-transparent hover:text-[#C88A58]'
                            }`}>
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="bg-[#C88A58] hover:bg-[#a66f43] text-white text-xs uppercase tracking-wider font-semibold px-4 md:px-5 py-2.5 rounded-sm flex items-center gap-2 transition-all shadow-sm shrink-0 relative cursor-pointer">
                        <ShoppingBag className="w-4 h-4" />
                        <span className="hidden sm:inline">Your Order</span>
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-white text-[#C88A58] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                                {totalItems}
                            </span>
                        )}
                    </button>

                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2.5 bg-[#231F1E] border border-white/10 text-white rounded-sm hover:text-[#C88A58] transition cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#1a1716] border-b border-white/10 px-6 py-5 space-y-3 shadow-2xl animate-fadeIn">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`block w-full text-left py-2 text-sm uppercase tracking-wider font-medium transition-colors ${
                                activePage === item.id
                                    ? 'text-[#C88A58]'
                                    : 'text-gray-300 hover:text-white'
                            }`}>
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}