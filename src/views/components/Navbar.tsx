import {useState} from "react";
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
                <a href="#" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <img src={logo} className="h-14 ml-5 mr-5" alt="Nav-logo"/>
                        <div className="text-2xl font-bold">DINESH TOURS &
                            <span className="text-blue-500"> TRAVELS</span></div>
                    </div>
                </a>

                <div className="hidden lg:flex space-x-10 mr-8 text-1xl font-semibold">
                    <a href="#home" className="hover:text-blue-500 transition-colors duration-300">HOME</a>
                    <a href="#about" className="hover:text-blue-500 transition-colors duration-300">ABOUT</a>
                    <a href="#packages" className="hover:text-blue-500 transition-colors duration-300">PACKAGES</a>
                    <a href="#contacts" className="hover:text-blue-500 transition-colors duration-300">CONTACTS</a>
                </div>

                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">{isOpen ?
                        <FaTimes size={28}/> : <FaBars size={28}/>}</button>
                </div>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-darkBlue`}>
                <div className="flex flex-col items-center space-y-5 py-5">
                    <a href="#home" onClick={toggleMenu}
                       className="hover:text-blue-500 transition-colors duration-300">HOME</a>
                    <a href="#about" onClick={toggleMenu}
                       className="hover:text-blue-500 transition-colors duration-300">ABOUT</a>
                    <a href="#packages" onClick={toggleMenu}
                       className="hover:text-blue-500 transition-colors duration-300">PACKAGES</a>
                    <a href="#contacts" onClick={toggleMenu}
                       className="hover:text-blue-500 transition-colors duration-300">CONTACTS</a>
                </div>
            </div>
        </nav>
    );
}