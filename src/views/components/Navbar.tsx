import {useState} from "react";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../../assets/logo.png";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-darkBlue text-white p-2 fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a href="https://github.com/Kavithma-Thushal/my-portfolio-v2" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <img src={logo} className="h-14 ml-5 mr-5" alt="Nav-logo"/>
                        <div className="text-2xl font-bold">DINESH TOURS & <span
                            className="text-neonBlue">TRAVELS</span></div>
                    </div>
                </a>

                <div className="hidden lg:flex space-x-10 mr-8 text-1xl font-semibold">
                    <Link to="/home" className="hover:text-neonBlue transition-colors duration-300">HOME</Link>
                    <Link to="/about" className="hover:text-neonBlue transition-colors duration-300">ABOUT</Link>
                    <Link to="/packages" className="hover:text-neonBlue transition-colors duration-300">PACKAGES</Link>
                    <Link to="/bookings" className="hover:text-neonBlue transition-colors duration-300">BOOKINGS</Link>
                    <Link to="/contacts" className="hover:text-neonBlue transition-colors duration-300">CONTACTS</Link>
                </div>

                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">{isOpen ?
                        <FaTimes size={28}/> : <FaBars size={28}/>}</button>
                </div>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-darkBlue`}>
                <div className="flex flex-col items-center space-y-5 py-5">
                    <Link to="/home" onClick={toggleMenu}
                          className="hover:text-neonBlue transition-colors duration-300">HOME</Link>
                    <Link to="/about" onClick={toggleMenu}
                          className="hover:text-neonBlue transition-colors duration-300">ABOUT</Link>
                    <Link to="/packages" onClick={toggleMenu}
                          className="hover:text-neonBlue transition-colors duration-300">PACKAGES</Link>
                    <Link to="/bookings" onClick={toggleMenu}
                          className="hover:text-neonBlue transition-colors duration-300">BOOKINGS</Link>
                    <Link to="/contacts" onClick={toggleMenu}
                          className="hover:text-neonBlue transition-colors duration-300">CONTACTS</Link>
                </div>
            </div>
        </nav>
    );
}