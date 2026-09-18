import {motion, AnimatePresence} from 'framer-motion';
import {Star, Quote} from 'lucide-react';
import { useTestimonials } from '../hooks/useTestimonials';

export default function TestimonialSection() {
    const { testimonialPages, currentIndex, setCurrentIndex, currentTestimonials } = useTestimonials();

    return (
        <section className="py-20 bg-[#1A1716] text-[#FAF7F2] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-xl mx-auto mb-16"
                >
                    <span className="text-xs uppercase tracking-widest text-[#C88A58] font-semibold bg-[#2A2421] px-3.5 py-1.5 rounded-full">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3">
                        Our Customers Feedback
                    </h2>
                    <p className="text-[#C5B5AE] mt-2 text-sm">
                        What people say about our artisanal pastries and warm daily service.
                    </p>
                </motion.div>

                <div className="relative min-h-[320px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            {currentTestimonials.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-[#231F1E] p-6 md:p-8 rounded-3xl border border-[#3A322E] shadow-xl flex flex-col justify-between relative"
                                >
                                    <Quote className="absolute top-6 right-6 w-8 h-8 text-[#C88A58]/20" />

                                    <div>
                                        <div className="flex items-center gap-1 text-[#C88A58] mb-3">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>

                                        <p className="text-[#C5B5AE] text-sm md:text-base leading-relaxed mb-6">
                                            "{item.comment}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 pt-4 border-t border-[#3A322E]">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-11 h-11 rounded-full object-cover border border-[#C88A58]"
                                        />

                                        <div>
                                            <h4 className="text-white font-serif font-bold text-sm">
                                                {item.name}
                                            </h4>
                                            <span className="text-xs text-[#C88A58]">
                                                {item.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center items-center gap-2 mt-10">
                    {testimonialPages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                currentIndex === index
                                    ? "w-8 bg-[#C88A58]"
                                    : "w-2.5 bg-[#3A322E] hover:bg-[#7A6C65]"
                            }`}
                            aria-label={`Go to slide group ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}