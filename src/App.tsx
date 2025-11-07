import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./views/components/Navbar.tsx";
import Home from "./views/pages/Home.tsx";
import {Footer} from "./views/components/Footer.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Home/>
            <Footer/>
        </BrowserRouter>
    )
}