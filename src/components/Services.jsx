import { UtensilsCrossed, Truck, Cake } from 'lucide-react';
import { bakeryServices } from '../data/bakeryData';

export default function Services() {
    const renderIcon = (name) => {
        switch (name) {
            case 'UtensilsCrossed':
                return <UtensilsCrossed className="w-8 h-8 text-[#7C5235]" />;
                case 'Truck':
                    return <Truck className="w-8 h-8 text-[#7C5235]" />;
                    case 'Cake':
                        return <Cake className="w-8 h-8 text-[#7C5235]" />;
                        default:
                            return null;
                        }
                    };

    return (
    <section id="services" className="py-20 bg-[#F3EADF]">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-16">
                <h2 className="text-3xl font-serif font-bold text-[#3B2F2F]">Our Specialities</h2>
                <p className="text-[#7A6C65] mt-2">Dibuat khusus untuk memberikan pengalaman rasa terbaik untukmu.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {bakeryServices.map((service) => (
                        <div key={service.id} className="bg-[#FAF7F2] p-8 rounded-2xl shadow-sm border border-[#E8DFD8]">
                            <div className="w-14 h-14 bg-[#F3EADF] rounded-xl flex items-center justify-center mb-6">
                                {renderIcon(service.iconName)}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#3B2F2F] mb-2">{service.title}</h3>
                                <p className="text-[#7A6C65] text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
    );
}