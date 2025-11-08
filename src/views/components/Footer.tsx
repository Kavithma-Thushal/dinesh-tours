import {FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-[#040F36] text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* About Us */}
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold text-white mb-3">Dinesh Tours & Travels</h1>
                    <p className="text-sm leading-relaxed">
                        Explore the beauty of Sri Lanka with Dinesh Tours & Travels — your trusted travel partner for
                        unforgettable adventures, comfortable stays, and safe journeys across the island.
                    </p>
                </div>

                {/* Contact Us */}
                <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-3">Contact Us</h3>
                    <p className="text-sm mb-2">Feel free to contact and reach us!</p>
                    <ul className="text-sm space-y-1">
                        <li>📞 077 0076915</li>
                        <li>✉️ dilharapradeep510@gamil.com</li>
                        <li>📍 25 Galle Road, Colombo, Sri Lanka</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-3">Subscribe</h3>
                    <p className="text-sm mb-4">
                        Subscribe to our newsletter for the latest travel packages and updates!
                    </p>

                    <form
                        className="flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center lg:justify-start gap-2 mb-6 w-full">
                        <input type="email" placeholder="Enter your email"
                               className="w-full sm:w-auto flex-1 px-4 py-2 rounded-full text-gray-900 focus:outline-none"/>
                        <button type="submit"
                                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white transition duration-300">
                            Subscribe
                        </button>
                    </form>

                    <div className="flex justify-center lg:justify-start space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition duration-300">
                            <FaFacebookF className="text-white"/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-500 transition duration-300">
                            <FaInstagram className="text-white"/>
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-900 transition duration-300">
                            <FaTiktok className="text-white"/>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-sky-500 transition duration-300">
                            <FaTwitter className="text-white"/>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-700 transition duration-300">
                            <FaLinkedinIn className="text-white"/>
                        </a>
                        <a href="https://wa.me/0770076915" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-green-500 transition duration-300">
                            <FaWhatsapp className="text-white"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Dinesh Tours & Travels. All rights reserved.
            </div>
        </footer>
    );
}