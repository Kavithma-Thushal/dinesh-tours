import hero from "../../assets/hero.jpg";
import {FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";

export function Home() {
    return (
        <section id="home" className="relative">
            <img src={hero} alt="Sri Lanka" className="w-full h-[100vh] object-cover object-center brightness-50"/>
            <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 mt-24">
                <h1 className="md:text-7xl font-bold mb-4">
                    DISCOVER THE BEAUTY OF <br/>
                    <span className="md:text-8xl text-6xl">SRI LANKA</span>
                </h1>
                <p className="text-lg md:text-xl font-semibold max-w-2xl mt-20">
                    Experience unforgettable tours, rich culture, golden beaches, and scenic hill country adventures.
                </p>
                <div className="flex justify-center gap-8 mt-8">
                    <a href="#contacts"
                       className="bg-blue-500 text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300 inline-block">
                        LEARN MORE
                    </a>
                    <a href="#packages"
                       className="border-2 border-white text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300 inline-block">
                        BOOK NOW
                    </a>
                </div>
            </div>

            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/20 transition duration-300">
                    <FaFacebookF/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/20 transition duration-300">
                    <FaInstagram/>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/20 transition duration-300">
                    <FaTiktok/>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/20 transition duration-300">
                    <FaYoutube/>
                </a>
            </div>

            <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer"
               className="fixed bottom-6 right-6 bg-green-500 z-50 text-white p-4 rounded-full shadow-lg hover:scale-110 animate-bounce">
                <FaWhatsapp size={28}/>
            </a>
        </section>
    );
}