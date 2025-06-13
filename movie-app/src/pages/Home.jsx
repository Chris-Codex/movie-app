import { useContext } from "react";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import AppContext from "../context/AppContext";
import Profile from "../components/Profile";

const Home = () => {
    const { navToggle, isMouseEnter, setIsMouseEnter } = useContext(AppContext);

    return (
        <div className="home-wrapper">
            <Navbar />
            {navToggle ? <MobileNav /> : ""}
            {isMouseEnter ? <Profile /> : ""}
        </div>
    )
}

export default Home;