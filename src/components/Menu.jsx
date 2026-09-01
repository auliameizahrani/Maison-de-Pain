import { Plus } from 'lucide-react';
import { useCart } from '../context/useCart';
import { motion, AnimatePresence } from 'framer-motion';
import { useMenu } from '../hooks/useMenu';

export default function Menu() {
    const { activeTab, setActiveTab, categories, filteredMenu } = useMenu();
    const { addToCart } = useCart();

    return (
        <section id="menu" className="py-20 bg-[#1A1716] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                
                <motion.div
                initial={{ opacity: 0, y: -15}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px"}}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="text-center max-w-xl mx-auto mb-12">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Fresh From The Oven</h2>
                    <p className="text-[#C5B5AE] mt-2 text-xs sm:text-sm">All-time visitor favorites.</p>
        
                    <div className="flex justify-start sm:justify-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none px-2 sm:px-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                                    activeTab === cat
                                        ? 'bg-[#C88A58] text-white shadow-md'
                                        : 'bg-[#231F1E] text-[#C5B5AE] border border-[#3A322E] hover:bg-[#2A2421]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                    {filteredMenu.map((item, index) => (
                        <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95, y: 25}}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        exit={{ opacity: 0, scale: 0.95, y: -15 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.04,
                            ease: [0.25, 1, 0.5, 1]
                        }}
                        className="bg-[#231F1E] rounded-2xl overflow-hidden shadow-sm border border-[#3A322E] hover:border-[#C88A58]/40 transition-colors flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-serif font-bold text-base text-white">{item.name}</h3>
                                        <span className="text-sm font-bold text-[#C88A58] whitespace-nowrap ml-2">{item.price}</span>
                                    </div>
                                    <p className="text-[#C5B5AE] text-xs leading-relaxed mb-4">{item.desc}</p>
                                </div>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="w-full py-2.5 bg-[#2A2421] hover:bg-[#C88A58] hover:text-white text-[#C88A58] text-xs font-semibold rounded-xl flex items-center justify-center gap-1 transition-colors mt-auto border border-[#3A322E] cursor-pointer"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    <span>Add to Order</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}