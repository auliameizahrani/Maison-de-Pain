import { UtensilsCrossed, Truck, Cake } from 'lucide-react';
import { bakeryServices } from '../data/bakeryData';

export default function Services() {
    const renderIcon = (name) => {
        switch (name) {
            case 'UtensilsCrossed':
                return <UtensilsCrossed className="w-8 h-8 text-[#C88A58]" />;
            case 'Truck':
                return <Truck className="w-8 h-8 text-[#C88A58]" />;
            case 'Cake':
                return <Cake className="w-8 h-8 text-[#C88A58]" />;
            default:
                return null;
        }
    };

    return (
        <section id="services" className="py-20 bg-[#1A1716]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="text-3xl font-serif font-bold text-white">Our Specialities</h2>
                    <p className="text-[#C5B5AE] mt-2 text-sm">Crafted especially to give you the best taste experience.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {bakeryServices.map((service) => (
                        <div key={service.id} className="bg-[#231F1E] p-8 rounded-2xl shadow-sm border border-[#3A322E]">
                            <div className="w-14 h-14 bg-[#2A2421] rounded-xl flex items-center justify-center mb-6">
                                {renderIcon(service.iconName)}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-[#C5B5AE] text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}