import storeImage from '../assets/store.jpg';
import chef1 from '../assets/chefs/chef1.jpg';
import chef2 from '../assets/chefs/chef2.jpg';
import chef3 from '../assets/chefs/chef3.jpg';
import chef4 from '../assets/chefs/chef4.jpg';

export default function AboutPage() {
    const chefs = [
        {
            id: 1,
            name: "JEAN-LUC DUBOIS",
            role: "Head Master Baker",
            image: chef1,
        },
        {
            id: 2,
            name: "ELENA RESTOVA",
            role: "Pastry Specialist",
            image: chef2
        },
        {
            id: 3,
            name: "MARCO SILVA",
            role: "Artisan Bread Specialist",
            image: chef3
        },
        {
            id: 4,
            name: "ANTONIO ROSSI",
            role: "Sourdough Expert",
            image: chef4
        }
    ];

    return (
        <div className="bg-[#121111] text-white min-h-screen">
            <section className="py-20 px-6 md:px-16 border-b border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-sm">
                        <img
                            src={storeImage}
                            alt="Maison de Pain Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <span className="text-[#C88A58] text-xs font-semibold uppercase tracking-widest">Since 2018</span>
                        <h2
                            className="text-3xl md:text-5xl font-bold tracking-wide leading-tight text-white"
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                            WELCOME TO <span className="text-[#C88A58]">MAISON DE PAIN</span>
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                            At Maison de Pain, we believe that the best bread comes from patience, high-quality organic ingredients, and a love for the artisan craft. Every dawn, our master bakers begin with natural fermentation without any artificial preservatives.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#121111]">
                <div className="max-w-7xl mx-auto text-center space-y-3 mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        OUR CHEF
                    </h2>

                    <div className="flex items-center justify-center gap-2 pt-1">
                        <div className="w-10 h-[1px] bg-[#C88A58]/60"/>
                        <div className="w-2 h-2 rotate-45 border border-[#C88A58]" />
                        <div className="w-10 h-[1px] bg-[#C88A58]/60"/>
                    </div>

                    <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto font-light pt-2">
                        The skilled hands behind every soft pastry and the aroma of fresh bread served every day.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {chefs.map((chef) => (
                        <div
                            key={chef.id}
                            className="border border-[#C88A58]/30 bg-[#171616] p-8 text-center rounded-sm transition-all duration-300 hover:border-[#C88A58] hover:-translate-y-1 group">
                            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-[#C88A58]/40 p-1 mb-6 group-hover:border-[#C88A58] transition-colors">
                                <img
                                    src={chef.image}
                                    alt={chef.name}
                                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>

                            <h3
                                className="text-sm font-bold tracking-wider text-white uppercase mb-1"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {chef.name}
                            </h3>
                            <p className="text-[11px] text-[#C88A58] font-light tracking-widest uppercase">
                                {chef.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}