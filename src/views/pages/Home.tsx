import {useEffect, useState} from "react";
import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";
import hero4 from "../../assets/hero/hero4.jpg";
import hero5 from "../../assets/hero/hero5.jpg";

export function Home() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const images = [hero1, hero2, hero3, hero4, hero5];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (current === images.length) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrent(0);
            }, 2000);
            return () => clearTimeout(timeout);
        } else {
            setIsTransitioning(true);
        }
    }, [current, images.length]);

    return (
        <section id="home" className="relative overflow-hidden">

            {/* Slider */}
            <div className={`flex ${isTransitioning ? "transition-transform duration-[2000ms] ease-in-out" : ""}`}
                 style={{
                     width: `${(images.length + 1) * 100}%`,
                     transform: `translateX(-${current * (100 / (images.length + 1))}%)`,
                 }}>
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Slide ${index + 1}`}
                         className="w-full h-[100vh] object-cover object-center brightness-75 flex-shrink-0"
                         style={{width: `${100 / (images.length + 1)}%`}}/>
                ))}
                <img src={images[0]} alt="Clone of first"
                     className="w-full h-[100vh] object-cover object-center brightness-75 flex-shrink-0"
                     style={{width: `${100 / (images.length + 1)}%`}}/>
            </div>

            {/* Text */}
            <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 mt-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Discover the Beauty of <span className="text-neonBlue">Sri Lanka</span>
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mt-5">
                    Experience unforgettable tours, rich culture, golden beaches, and scenic hill country adventures.
                </p>
                <div className="flex justify-center gap-4 mt-8">
                    <a href="#packages"
                       className="bg-neonBlue text-white px-6 py-3 rounded-lg transform hover:scale-105 transition duration-300 inline-block">
                        Explore Packages
                    </a>
                    <a href="#contacts"
                       className="bg-white text-darkBlue px-6 py-3 rounded-lg transform hover:scale-105 transition duration-300 inline-block">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}