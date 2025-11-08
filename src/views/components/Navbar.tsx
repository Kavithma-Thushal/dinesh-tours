import {useState, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../../assets/logo.png";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed w-full z-50 bg-transparent backdrop-blur-lg p-4 border-b border-white/30">
            <div className="container mx-auto flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center">
                    <img src={logo} className="h-14 mr-3" alt="Nav-logo"/>
                    <div className={`text-2xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>
                        DINESH TOURS & <span className="text-blue-500">TRAVELS</span>
                    </div>
                </a>

                {/* Menu Items */}
                <div
                    className={`hidden lg:flex flex-1 justify-center space-x-10 font-semibold text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                    <a href="#home" className="hover:text-blue-500">HOME</a>
                    <a href="#about" className="hover:text-blue-500">ABOUT US</a>
                    <a href="#destinations" className="hover:text-blue-500">DESTINATIONS</a>
                    <a href="#packages" className="hover:text-blue-500">PACKAGES</a>
                    <a href="#gallery" className="hover:text-blue-500">GALLERY</a>
                    <a href="#contacts" className="hover:text-blue-500">CONTACT US</a>
                </div>

                {/* BOOK NOW Button */}
                <div className="hidden lg:block">
                    <a href="#packages"
                       className="bg-blue-500 text-white px-4 py-2 text-sm rounded-full hover:scale-105 inline-block mr-8">
                        BOOK NOW
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu}
                            className={`${isScrolled ? "text-black" : "text-white"} focus:outline-none`}>
                        {isOpen ? <FaTimes size={28}/> : <FaBars size={28}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-transparent backdrop-blur-md`}>
                <div
                    className={`flex flex-col items-center space-y-5 py-5 font-semibold text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                    <a href="#home" onClick={toggleMenu} className="hover:text-blue-500">HOME</a>
                    <a href="#about" onClick={toggleMenu} className="hover:text-blue-500">ABOUT US</a>
                    <a href="#destinations" onClick={toggleMenu} className="hover:text-blue-500">DESTINATIONS</a>
                    <a href="#packages" onClick={toggleMenu} className="hover:text-blue-500">PACKAGES</a>
                    <a href="#gallery" onClick={toggleMenu} className="hover:text-blue-500">GALLERY</a>
                    <a href="#contacts" onClick={toggleMenu} className="hover:text-blue-500">CONTACT US</a>
                    <a href="#packages"
                       className="bg-blue-500 text-white px-4 py-2 text-sm rounded-full hover:scale-105 inline-block mt-4">
                        BOOK NOW
                    </a>
                </div>
            </div>
        </nav>
    );
}