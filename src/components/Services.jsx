import { UtensilsCrossed, Truck, Cake } from 'lucide-react';
import { bakeryServices } from '../data/bakeryData';

export default function Services() {
    const renderIcon = (name) => {
        switch (name) {
            case 'UtensilsCrossed':
                return <UtensilsCrossed className="w-7 h-7 sm:w-8 sm:h-8 text-[#C88A58]" />;
            case 'Truck':
                return <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-[#C88A58]" />;
            case 'Cake':
                return <Cake className="w-7 h-7 sm:w-8 sm:h-8 text-[#C88A58]" />;
            default:
                return null;
        }
    };

    return (
        <section id="services" className="py-16 sm:py-20 bg-[#1A1716]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                
                <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 px-2">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Our Specialities</h2>
                    <p className="text-[#C5B5AE] mt-2 text-xs sm:text-sm">Crafted especially to give you the best taste experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {bakeryServices.map((service) => (
                        <div 
                            key={service.id} 
                            className="bg-[#231F1E] p-6 sm:p-8 rounded-2xl shadow-sm border border-[#3A322E] hover:border-[#C88A58]/40 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2A2421] rounded-xl flex items-center justify-center mb-5 sm:mb-6 border border-[#3A322E]">
                                    {renderIcon(service.iconName)}
                                </div>
                                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-[#C5B5AE] text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}