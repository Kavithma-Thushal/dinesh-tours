import {Link} from "react-router-dom";
import hero from "../../assets/hero.jpg";

export function Home() {
    return (
        <section>
            <img src={hero} alt="Sri Lanka" className="w-full h-[100vh] object-cover object-center brightness-75"/>
            <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 mt-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Discover the Beauty of <span className="text-neonBlue">Sri Lanka</span>
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mt-5">Experience unforgettable tours, rich culture,
                    golden beaches, and scenic hill country adventures.</p>
                <div className="flex justify-center gap-4 mt-8">
                    <Link to="/packages"
                          className="bg-neonBlue text-white px-6 py-3 rounded-lg transform hover:scale-105 transition duration-300 inline-block">
                        Explore Packages
                    </Link>
                    <Link to="/contacts"
                          className="bg-white text-darkBlue px-6 py-3 rounded-lg transform hover:scale-105 transition duration-300 inline-block">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}