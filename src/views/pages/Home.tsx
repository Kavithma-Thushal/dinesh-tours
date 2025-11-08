import hero from "../../assets/hero.jpg";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <div className="bg-gray-50 text-gray-800 pt-24">
            {/* Hero Section */}
            <section className="relative">
                <img
                    src={hero}
                    alt="Sri Lanka"
                    className="w-full h-[80vh] object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Discover the Beauty of <span className="text-neonBlue">Sri Lanka</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mb-6">
                        Experience unforgettable tours, rich culture, golden beaches, and scenic hill country
                        adventures.
                    </p>
                    <div className="space-x-4">
                        <Link
                            to="/packages"
                            className="bg-neonBlue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Explore Packages
                        </Link>
                        <Link
                            to="/contacts"
                            className="bg-white text-darkBlue px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-16 px-6 md:px-20 text-center">
                <h2 className="text-3xl font-semibold text-darkBlue mb-6">Why Choose Dinesh Tours & Travels?</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    We provide personalized tour packages covering all corners of Sri Lanka —
                    from misty mountains of Nuwara Eliya to sunny beaches of Galle.
                    Enjoy safe travel, experienced guides, and unforgettable memories.
                </p>
            </section>
        </div>
    );
}