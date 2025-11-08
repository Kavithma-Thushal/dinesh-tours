export function Contacts() {
    return (
        <div className="bg-gray-50 pt-24 px-6 md:px-20 pb-20">
            <h2 className="text-4xl font-bold text-center text-darkBlue mb-8">
                Contact Us
            </h2>
            <p className="text-center text-gray-700 mb-12">
                Have questions or want to book your next Sri Lankan adventure?
                Fill out the form below and we’ll get back to you soon!
            </p>

            <form className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-5">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue"
                />
                <textarea
                    placeholder="Your message"
                    rows={5}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue"
                ></textarea>
                <button
                    type="submit"
                    className="bg-neonBlue text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}