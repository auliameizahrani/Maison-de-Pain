import { Clock, Users, Phone, Mail, MapPin, Cake, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm';

export default function ContactForm() {
    const {
        bookingData,
        errors,
        isSubmitted,
        handleInputChange,
        handleBookingSubmit,
    } = useContactForm();

    return (
        <section id="contact" className="py-20 bg-[#1A1716] text-[#FAF7F2]">
            <div className="max-w-6xl mx-auto px-6">
                
                <motion.div
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="text-center max-w-xl mx-auto mb-16">
                    <span className="text-xs uppercase tracking-widest text-[#C88A58] font-semibold bg-[#2A2421] px-3.5 py-1.5 rounded-full">
                        Reservation & Info
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3">
                        Book A Table & Visit Us
                    </h2>
                    <p className="text-[#C5B5AE] mt-2 text-sm">
                        Reserve your spot in advance or check our store hours below.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                    <motion.div
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, ease: [0.25, 1, 0.5, 1]}}
                    className="bg-[#231F1E] p-8 rounded-3xl shadow-lg border border-[#3A322E] flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                                <Users className="w-5 h-5 text-[#C88A58]" />
                                <span>Book A Table</span>
                            </h3>

                            {isSubmitted && (
                                <div className="mb-6 bg-[#2A2421] border border-[#C88A58]/40 p-4 rounded-2xl flex items-center gap-3 text-sm text-[#FAF7F2] animate-fadeIn">
                                    <CheckCircle2 className="w-5 h-5 text-[#C88A58] flex-shrink-0" />
                                    <span>Your table reservation request has been successfully sent! We will contact you shortly.</span>
                                </div>
                            )}
                            
                            <form onSubmit={handleBookingSubmit} className="space-y-4" noValidate>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={bookingData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className={`w-full px-4 py-3.5 rounded-xl border bg-[#1A1716] text-white placeholder-[#7A6C65] focus:outline-none focus:ring-2 focus:ring-[#C88A58]/40 text-sm ${
                                            errors?.name ? 'border-red-500' : 'border-[#3A322E]'
                                        }`}
                                    />
                                    {errors?.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={bookingData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className={`w-full px-4 py-3.5 rounded-xl border bg-[#1A1716] text-white placeholder-[#7A6C65] focus:outline-none focus:ring-2 focus:ring-[#C88A58]/40 text-sm ${
                                            errors?.phone ? 'border-red-500' : 'border-[#3A322E]'
                                        }`}
                                    />
                                    {errors?.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={bookingData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className={`w-full px-4 py-3.5 rounded-xl border bg-[#1A1716] text-white placeholder-[#7A6C65] focus:outline-none focus:ring-2 focus:ring-[#C88A58]/40 text-sm ${
                                            errors?.email ? 'border-red-500' : 'border-[#3A322E]'
                                        }`}
                                    />
                                    {errors?.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <select
                                        value={bookingData.persons}
                                        onChange={(e) => handleInputChange('persons', e.target.value)}
                                        className={`w-full px-4 py-3.5 rounded-xl border bg-[#1A1716] text-white focus:outline-none focus:ring-2 focus:ring-[#C88A58]/40 text-sm ${
                                            errors?.persons ? 'border-red-500' : 'border-[#3A322E]'
                                        }`}
                                    >
                                        <option value="" disabled className="text-[#7A6C65]">How many persons?</option>
                                        <option value="2" className="bg-[#1A1716] text-white py-2">2 Persons</option>
                                        <option value="3" className="bg-[#1A1716] text-white py-2">3 Persons</option>
                                        <option value="4" className="bg-[#1A1716] text-white py-2">4 Persons</option>
                                        <option value="5" className="bg-[#1A1716] text-white py-2">5 Persons</option>
                                        <option value="6" className="bg-[#1A1716] text-white py-2">6+ Persons</option>
                                    </select>
                                    {errors?.persons && <p className="text-red-500 text-xs mt-1 ml-1">{errors.persons}</p>}
                                </div>

                                <div>
                                    <input
                                        type="date"
                                        value={bookingData.date}
                                        onChange={(e) => handleInputChange('date', e.target.value)}
                                        className={`w-full px-4 py-3.5 rounded-xl border bg-[#1A1716] text-white focus:outline-none focus:ring-2 focus:ring-[#C88A58]/40 text-sm ${
                                            errors?.date ? 'border-red-500' : 'border-[#3A322E]'
                                        }`}
                                    />
                                    {errors?.date && <p className="text-red-500 text-xs mt-1 ml-1">{errors.date}</p>}
                                </div>

                                <motion.button
                                    whileHover={{scale:1.01}}
                                    whileTap={{scale: 0.98}}
                                    type="submit"
                                    className="w-full py-3.5 bg-[#C88A58] hover:bg-[#B27646] text-white font-medium text-sm rounded-xl transition-colors shadow-md mt-4 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                                >
                                    <span>Book Now</span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.1}}
                    className="flex flex-col justify-between space-y-4">
                        
                        <div className="bg-[#231F1E] p-6 rounded-3xl shadow-lg border border-[#3A322E]">
                            <h3 className="text-lg font-serif font-bold text-white mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-[#C88A58]" />
                                <span>Store Hours</span>
                            </h3>
                            <ul className="space-y-3 text-sm text-[#C5B5AE]">
                                <li className="flex justify-between border-b border-[#3A322E] pb-2">
                                    <span>Monday - Friday</span>
                                    <span className="text-white font-semibold">07:00 AM - 20:00 PM</span>
                                </li>
                                <li className="flex justify-between pb-1">
                                    <span>Saturday - Sunday</span>
                                    <span className="text-white font-semibold">08:00 AM - 21:00 PM</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#231F1E] p-6 rounded-3xl shadow-lg border border-[#3A322E] space-y-3">
                            <h3 className="text-lg font-serif font-bold text-white mb-4">Contact Info</h3>
                            <div className="flex items-center gap-3 text-sm text-[#C5B5AE]">
                                <MapPin className="w-4 h-4 text-[#C88A58] flex-shrink-0" />
                                <span>45 Senopati Street, South Jakarta</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[#C5B5AE]">
                                <Phone className="w-4 h-4 text-[#C88A58] flex-shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[#C5B5AE]">
                                <Mail className="w-4 h-4 text-[#C88A58] flex-shrink-0" />
                                <span>hello@maisondepain.com</span>
                            </div>
                        </div>

                        <div className="bg-[#231F1E] p-6 rounded-3xl border border-[#3A322E] flex items-start gap-4 shadow-lg">
                            <div className="w-10 h-10 bg-[#2A2421] rounded-xl flex items-center justify-center text-[#C88A58] flex-shrink-0">
                                <Cake className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-serif font-bold text-white">Looking for Custom Birthday Cakes?</h4>
                                <p className="text-xs text-[#C5B5AE] mt-1 leading-relaxed">
                                    For custom cake designs, please contact us via WhatsApp at <span className="text-[#C88A58] font-semibold">+62 812-3456-7890</span> prior to ordering.
                                </p>
                            </div>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}