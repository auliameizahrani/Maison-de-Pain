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
        <section id="contact" className="py-20 bg-[#F3EADF]">
            <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#C88A58] font-semibold bg-[#FAF7F2] px-3.5 py-1.5 rounded-full">
                    Contact Us
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3B2F2F]">
                    Kunjungi Toko Kami atau Sapa Kami!
                </h2>
                <p className="text-[#7A6C65] text-sm leading-relaxed">
                    Punya pertanyaan seputar pesanan khusus, catering acara, atau ingin memesan kue ulang tahun estetik? Hubungi kami langsung.
                </p>

                <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#FAF7F2] rounded-xl flex items-center justify-center text-[#7C5235]">
                            <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold text-[#7C5235] uppercase">Lokasi</h4>
                                <p className="text-sm text-[#3B2F2F]">Jl. Senopati No. 45, Jakarta Selatan</p>
                                </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#FAF7F2] rounded-xl flex items-center justify-center text-[#7C5235]">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-[#7C5235] uppercase">Telepon / WA</h4>
                                        <p className="text-sm text-[#3B2F2F]">+62 812-3456-7890</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#FAF7F2] rounded-xl flex items-center justify-center text-[#7C5235]">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-[#7C5235] uppercase">Email</h4>
                                        <p className="text-sm text-[#3B2F2F]">hello@maisondepain.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#FAF7F2] p-8 rounded-3xl shadow-sm border border-[#E8DFD8]">
                                <h3 className="text-xl font-serif font-bold text-[#3B2F2F] mb-6">Kirim Pesan</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#6B5E59] mb-1">Nama Lengkap</label>
                                        <input
                                        type="text"
                                        placeholder="Masukkan nama kamu"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[#E8DFD8] bg-white focus:outline-none focus:ring-2 focus:ring-[#7C5235]/40 text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#6B5E59] mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="nama@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[#E8DFD8] bg-white focus:outline-none focus:ring-2 focus:ring-[#7C5235]/40 text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#6B5E59] mb-1">Pesan</label>
                                        <textarea
                                            rows="4"
                                            placeholder="Tulis pesan atau request khusus di sini..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#E8DFD8] bg-white focus:outline-none focus:ring-2 focus:ring-[#7C5235]/40 text-sm"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3.5 bg-[#7C5235] hover:bg-[#633F27] text-white font-medium text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>Kirim Pesan</span>
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>
    );
}