import { useState } from 'react';

export function useNavbar(setActivePage) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'Menu', id: 'menu' },
        { name: 'Services', id: 'services' },
        { name: 'About', id: 'about' },
        { name: 'Contact', id: 'contact' },
    ];

    const handleNavClick = (id) => {
        if (setActivePage) {
            setActivePage(id);
        }
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return {
        isMobileMenuOpen,
        navItems,
        handleNavClick,
        toggleMobileMenu
    };
}