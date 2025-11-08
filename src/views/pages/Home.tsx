import hero from "../../assets/hero.jpg";

export function Home() {
    return (
        <section id="home" className="relative">
            <img src={hero} alt="Sri Lanka" className="w-full h-[100vh] object-cover object-center brightness-50"/>
            <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 mt-24">
                <h1 className="md:text-7xl font-bold mb-4">DISCOVER THE BEAUTY OF <br/>
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
        </section>
    );
}