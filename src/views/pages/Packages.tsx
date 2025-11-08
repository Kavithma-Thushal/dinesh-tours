import {packages} from "../../data/packages";

export function Packages() {
    return (
        <section className="pt-28 px-8 md:px-20 pb-20">
            <h2 className="text-4xl font-bold text-center text-darkBlue mb-14">Our Tour Packages</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {packages.map((pkg) => (
                    <div key={pkg.id}
                         className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
                        <img src={pkg.image} alt={pkg.name} className="h-56 w-full object-cover"/>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-darkBlue mb-2">{pkg.name}</h3>
                            <p className="text-gray-600 mb-2">{pkg.days}</p>
                            <p className="text-neonBlue font-bold mb-3">{pkg.price}</p>
                            <p className="text-gray-700 text-sm mb-4">{pkg.description}</p>
                            <button
                                className="bg-neonBlue text-white px-4 py-2 rounded-lg transform hover:scale-105 transition duration-300 inline-block">
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}