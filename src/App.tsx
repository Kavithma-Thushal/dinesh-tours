import {Navbar} from "./views/components/Navbar.tsx";
import {Footer} from "./views/components/Footer.tsx";
import {Home} from "./views/pages/Home.tsx";
import {About} from "./views/pages/About.tsx";
import {Packages} from "./views/pages/Packages.tsx";
import {Contacts} from "./views/pages/Contacts.tsx";

export default function App() {
    return (
        <div className="scroll-smooth">
            <Navbar/>
            <section id="home"><Home/></section>
            <section id="about"><About/></section>
            <section id="packages"><Packages/></section>
            <section id="contacts"><Contacts/></section>
            <Footer/>
        </div>
    );
}