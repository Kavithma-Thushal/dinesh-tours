import aboutImg from "../../assets/hero/hero1.jpg";

export function About() {
    return (
        <section id="about"
                 className="relative flex flex-col md:flex-row items-center md:px-20 py-16 space-y-8 md:space-y-0 md:space-x-12 pt-36 mb-6">
            <div className="md:w-1/2">
                <img src={aboutImg} className="rounded-2xl shadow-lg"/>
            </div>
            <div className="md:w-1/2 text-gray-800">
                <h2 className="text-4xl font-bold text-darkBlue mb-4 text-center">About Dinesh Tours & Travels
                </h2>
                <p className="text-lg mb-4 text-justify">
                    Founded in 2020, Dinesh Tours & Travels is a premier Sri Lankan travel agency committed
                    to offering authentic and unforgettable experiences across the island. From serene beaches
                    and lush hill country to vibrant cultural festivals, we organize group tours, private
                    getaways, and adventure trips tailored to every type of traveler. Our team of local experts
                    ensures you experience the best of Sri Lanka’s natural beauty, heritage, and hospitality.
                </p>
                <p className="text-lg text-justify">
                    Our mission is simple — to make your Sri Lankan journey smooth, exciting, and
                    memorable. We focus on personalized service, safety, and insider knowledge, helping you
                    explore hidden gems, enjoy unique cultural encounters, and create lasting memories with
                    trusted guidance at every step.
                </p>
            </div>
        </section>
    );
}