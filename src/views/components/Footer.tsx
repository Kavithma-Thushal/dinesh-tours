export function Footer() {
    return (
        <footer className="bg-darkBlue text-gray-300 text-sm py-6 flex flex-col items-center">
            <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-2 sm:space-y-0 text-center">
                <a href="#about" className="hover:text-neonBlue transition-colors duration-300">
                    About Us</a>
                <a href="#packages" className="hover:text-neonBlue transition-colors duration-300">
                    Tour Packages</a>
                <a href="#privacy-policy" className="hover:text-neonBlue transition-colors duration-300">
                    Privacy Policy</a>
                <a href="#terms-conditions" className="hover:text-neonBlue transition-colors duration-300">
                    Terms & Conditions</a>
            </div>

            <div className="text-center text-xs sm:text-sm mt-4">
                © {new Date().getFullYear()} Dinesh Tours & Travels. All rights reserved.
            </div>
        </footer>
    );
}