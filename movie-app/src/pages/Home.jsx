import { useContext } from "react";
import MobileNav from "../components/MobileNav";
import AppContext from "../context/AppContext";
import Navbar from "../components/Navbar";

const Home = () => {
    const { navToggle, isMouseEnter, setIsMouseEnter } = useContext(AppContext);

    return (
        <div className="home-wrapper">
            <Navbar />
        </div>
    )
}

export default Home;