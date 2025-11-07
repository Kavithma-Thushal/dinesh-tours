export default function Home() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">

            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white py-40"
                     style={{backgroundImage: "url('/hero.jpg')"}}>
                <div className="absolute inset-0 bg-darkBlue/70"></div>
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-neonBlue drop-shadow-lg">
                        Discover Sri Lanka With Us
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200">
                        Explore breathtaking beaches, ancient cities, and lush tea mountains — all in one paradise
                        island.
                    </p>
                    <a href="/packages"
                       className="mt-10 inline-block bg-neonBlue text-darkBlue font-semibold px-8 py-3 rounded-full hover:bg-white transition duration-300">
                        Explore Packages
                    </a>
                </div>
            </section>

            {/* Top Destinations Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-darkBlue mb-10">Top Destinations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {name: "Sigiriya", image: "/destinations/sigiriya.jpg"},
                            {name: "Ella", image: "/destinations/ella.jpg"},
                            {name: "Mirissa Beach", image: "/destinations/mirissa.jpg"},
                            {name: "Kandy", image: "/destinations/kandy.jpg"},
                            {name: "Nuwara Eliya", image: "/destinations/nuwara-eliya.jpg"},
                            {name: "Galle Fort", image: "/destinations/galle.jpg"},
                        ].map((place) => (
                            <div key={place.name}
                                 className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
                                <img src={place.image} alt={place.name} className="w-full h-56 object-cover"/>
                                <div className="bg-darkBlue text-white py-4 text-lg font-semibold">{place.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-darkBlue text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-neonBlue mb-10">Why Choose Dinesh Tours?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 bg-darkBlue/40 rounded-2xl shadow-md hover:bg-darkBlue/60 transition">
                            <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                            <p>We know every hidden gem of Sri Lanka and make sure you experience authentic local
                                culture.</p>
                        </div>
                        <div className="p-6 bg-darkBlue/40 rounded-2xl shadow-md hover:bg-darkBlue/60 transition">
                            <h3 className="text-xl font-semibold mb-3">Customizable Packages</h3>
                            <p>Design your dream trip — we tailor tours to your preferences and budget.</p>
                        </div>
                        <div className="p-6 bg-darkBlue/40 rounded-2xl shadow-md hover:bg-darkBlue/60 transition">
                            <h3 className="text-xl font-semibold mb-3">Trusted Service</h3>
                            <p>Thousands of happy travelers have trusted us for safe, affordable, and unforgettable
                                tours.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}