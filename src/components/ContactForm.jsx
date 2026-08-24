import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Terima kasih ${formData.name}, pesanmu berhasil terkirim!`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-[#1A1716]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <span className="text-xs uppercase tracking-widest text-[#C88A58] font-semibold bg-[#2A2421] px-3.5 py-1.5 rounded-full">
                            Contact Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                            Visit Our Shop or Say Hello!
                        </h2>
                        <p className="text-[#C5B5AE] text-sm leading-relaxed">
                            Have questions about custom orders, event catering, or want to order an aesthetic birthday cake? Contact us directly.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#2A2421] rounded-xl flex items-center justify-center text-[#C88A58]">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-[#C88A58] uppercase">Location</h4>
                                    <p className="text-sm text-white">45 Senopati Street, South Jakarta</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#2A2421] rounded-xl flex items-center justify-center text-[#C88A58]">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-[#C88A58] uppercase">Phone / WhatsApp</h4>
                                    <p className="text-sm text-white">+62 812-3456-7890</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#2A2421] rounded-xl flex items-center justify-center text-[#C88A58]">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-[#C88A58] uppercase">Email</h4>
                                    <p className="text-sm text-white">hello@maisondepain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#231F1E] p-8 rounded-3xl shadow-lg border border-[#3A322E]">
                        <h3 className="text-xl font-serif font-bold text-white mb-6">Send Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-[#C5B5AE] mb-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[#3A322E] bg-[#1A1716] text-white placeholder-[#7A6C65] focus:outline-none focus:ring-2 focus:ring-[#C88A58]/40 text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#C5B5AE] mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[#3A322E] bg-[#1A1716] text-white placeholder-[#7A6C65] focus:outline-none focus:ring-2 focus:ring-[#C88A58]/40 text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#C5B5AE] mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Type your message or special request here..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[#3A322E] bg-[#1A1716] text-white placeholder-[#7A6C65] focus:outline-none focus:ring-2 focus:ring-[#C88A58]/40 text-sm"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 bg-[#C88A58] hover:bg-[#B27646] text-white font-medium text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}