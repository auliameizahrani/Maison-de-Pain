import { useState } from 'react';
import { Plus } from 'lucide-react';
import { menuProducts } from '../data/bakeryData';

export default function Menu() {
    const [activeTab, setActiveTab] = useState('All');
    const categories = ['All', 'Pastry', 'Bread', 'Beverage', 'Cake'];
    
    const filteredMenu = activeTab === 'All'
        ? menuProducts
        : menuProducts.filter(item => item.category === activeTab);

    return (
        <section id="menu" className="py-20 bg-[#1A1716]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-xl mx-auto mb-12">
                    <h2 className="text-3xl font-serif font-bold text-white">Fresh From The Oven</h2>
                    <p className="text-[#C5B5AE] mt-2 text-sm">Our visitors' favorite choices this week.</p>
        
                    <div className="flex justify-center gap-2 mt-8 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                                    activeTab === cat
                                        ? 'bg-[#C88A58] text-white shadow-sm'
                                        : 'bg-[#231F1E] text-[#C5B5AE] border border-[#3A322E] hover:bg-[#2A2421]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredMenu.map((item) => (
                        <div key={item.id} className="bg-[#231F1E] rounded-2xl overflow-hidden shadow-sm border border-[#3A322E] hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-serif font-bold text-base text-white">{item.name}</h3>
                                        <span className="text-sm font-bold text-[#C88A58] whitespace-nowrap ml-2">{item.price}</span>
                                    </div>
                                    <p className="text-[#C5B5AE] text-xs leading-relaxed mb-4">{item.desc}</p>
                                </div>
                                <button className="w-full py-2 bg-[#2A2421] hover:bg-[#C88A58] hover:text-white text-[#C88A58] text-xs font-semibold rounded-xl flex items-center justify-center gap-1 transition-colors mt-auto border border-[#3A322E]">
                                    <Plus className="w-3.5 h-3.5" />
                                    <span>Add to Order</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}