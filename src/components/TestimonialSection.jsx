import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Star, Quote} from 'lucide-react';

const testimonialPages = [
    [
        {
            id: 1,
            name: "Charlotte Blake",
            role: "Verified Customer",
            comment: "Catering our office party of 50 people and everything was flawless. Fresh, delicious, on time and well presented.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            name: "Seraphina Smith",
            role: "Verified Customer",
            comment: "Honestly the best pastries I've ever had. The crust is incredible - perfectly crispy edges, and buttery inside!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            name: "William Scott",
            role: "Verified Customer",
            comment: "Ordered delivery and the food arrived hot and fresh in 22 minutes. Portions are generous and high quality.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ],
    [
        {
            id: 4,
            name: "Mateo Welber",
            role: "Verified Customer",
            comment: "The ambiance inside the shop is so cozy. It feels like stepping into a traditional Parisian café right in Jakarta.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            name: "Serena Lindstrom",
            role: "Verified Customer",
            comment: "Their custom cakes are out of this world! Ordered a birthday cake and all my friends kept asking where it was from.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            name: "Liam van Dijk",
            role: "Verified Customer",
            comment: "A hidden gem for coffee and croissant lovers. I come here every single Friday morning without fail.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
];

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialPages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

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
                            {testimonialPages[currentIndex].map((item) => (
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