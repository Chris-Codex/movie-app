import { useContext } from "react";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import AppContext from "../context/AppContext";

const Home = () => {
    const { navToggle, handleNavToggle } = useContext(AppContext);

    return (
        <div className="home-wrapper">
            <Navbar />
            {navToggle ? <MobileNav /> : ""}
        </div>
    )
}

export default Home;