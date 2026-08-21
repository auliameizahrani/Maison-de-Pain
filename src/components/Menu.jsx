import { useState } from 'react';
import { Plus } from 'lucide-react';
import { menuProducts } from '../data/bakeryData';

export default function Menu() {
    const [activeTab, setActiveTab] = useState('All');
    const categories = ['All', 'Pastry', 'Bread', 'Beverage'];
    
    const filteredMenu = activeTab === 'All'
        ? menuProducts
        : menuProducts.filter(item => item.category === activeTab);

    return (
        <section id="menu" className="py-20 max-w-6xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
                <h2 className="text-3xl font-serif font-bold text-[#3B2F2F]">Fresh From The Oven</h2>
                <p className="text-[#7A6C65] mt-2 text-sm">Our visitors' favorite choices this week.</p>
        
                <div className="flex justify-center gap-2 mt-8">
                    {categories.map((cat) => (
                        <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                            activeTab === cat
                                ? 'bg-[#7C5235] text-white shadow-sm'
                                : 'bg-[#F3EADF] text-[#6B5E59] hover:bg-[#E8DFD8]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredMenu.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8DFD8] hover:shadow-md transition-shadow">
                        <div className="h-48 overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-serif font-bold text-base text-[#3B2F2F]">{item.name}</h3>
                                <span className="text-sm font-bold text-[#C88A58]">{item.price}</span>
                            </div>
                            <p className="text-[#7A6C65] text-xs leading-relaxed mb-4">{item.desc}</p>
                            <button className="w-full py-2 bg-[#F3EADF] hover:bg-[#7C5235] hover:text-white text-[#7C5235] text-xs font-semibold rounded-xl flex items-center justify-center gap-1 transition-colors">
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add to Order</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}