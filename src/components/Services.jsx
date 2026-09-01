import { motion } from 'framer-motion';
import { useServices } from '../hooks/useServices';

export default function Services() {
    const { bakeryServices, iconMap } = useServices();

    return (
        <section id="services" className="py-16 sm:py-20 bg-[#1A1716] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                <motion.div
                initial={{opacity: 0, y: -20 }}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="text-center max-w-xl mx-auto mb-12 sm:mb-16 px-2">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Our Specialities</h2>
                    <p className="text-[#C5B5AE] mt-2 text-xs sm:text-sm">Crafted especially to give you the best taste experience.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {bakeryServices.map((service, index) => {
                        const IconComponent = iconMap[service.iconName];

                        return (
                            <motion.div
                                key={service.id}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{y: -8}}
                                className="bg-[#231F1E] p-6 sm:p-8 rounded-2xl shadow-sm border border-[#3A322E] hover:border-[#C88A58]/40 transition-colors flex flex-col justify-between cursor-pointer"
                            >
                                <div>
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2A2421] rounded-xl flex items-center justify-center mb-5 sm:mb-6 border border-[#3A322E]">
                                        {IconComponent && <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-[#C88A58]" />}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-[#C5B5AE] text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}