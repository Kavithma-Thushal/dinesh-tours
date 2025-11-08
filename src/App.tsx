import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./views/components/Navbar.tsx";
import {Footer} from "./views/components/Footer.tsx";
import {Home} from "./views/pages/Home.tsx";
import {About} from "./views/pages/About.tsx";
import {Packages} from "./views/pages/Packages.tsx";
import {Contacts} from "./views/pages/Contacts.tsx";

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/packages" element={<Packages/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}