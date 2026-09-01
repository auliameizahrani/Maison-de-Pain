import { useState } from 'react';
import { menuProducts } from '../data/bakeryData';

export function useMenu() {
    const [activeTab, setActiveTab] = useState('All');
    const categories = ['All', 'Pastry', 'Bread', 'Beverage', 'Cake'];

    const filteredMenu = activeTab === 'All'
        ? menuProducts
        : menuProducts.filter(item => item.category === activeTab);

    return {
        activeTab,
        setActiveTab,
        categories,
        filteredMenu
    };
}