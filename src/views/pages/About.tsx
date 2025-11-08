import aboutImg from "../../assets/hero.jpg";

export function About() {
    return (
        <div className="bg-gray-50 pt-24">
            <section
                className="flex flex-col md:flex-row items-center px-8 md:px-20 py-16 space-y-8 md:space-y-0 md:space-x-12">
                <div className="md:w-1/2">
                    <img
                        src={aboutImg}
                        alt="About Sri Lanka"
                        className="rounded-2xl shadow-lg"
                    />
                </div>

                <div className="md:w-1/2 text-gray-800">
                    <h2 className="text-4xl font-bold text-darkBlue mb-4">
                        About Dinesh Tours & Travels
                    </h2>
                    <p className="text-lg mb-4">
                        Founded in 2020, Dinesh Tours & Travels is a Sri Lankan travel agency
                        dedicated to delivering authentic experiences across the island.
                        We organize group tours, private getaways, and adventure trips that
                        connect travelers with local culture and nature.
                    </p>
                    <p className="text-lg">
                        Our mission is simple — make your Sri Lankan journey smooth,
                        exciting, and memorable with trusted service and expert travel guidance.
                    </p>
                </div>
            </section>
        </div>
    );
}