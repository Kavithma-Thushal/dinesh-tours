import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./views/components/Navbar.tsx";
// import {Footer} from "./views/components/Footer.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            {/*<Footer/>*/}
        </BrowserRouter>
    )
}