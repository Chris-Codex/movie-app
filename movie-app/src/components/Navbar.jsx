import { useContext } from "react";
import MobileNav from "./MobileNav";
import AppContext from "../context/AppContext";
import Profile from "./Profile";
import Navigation from "./Navigation";

const Navbar = () => {
    const { navToggle, isMouseEnter, setIsMouseEnter } = useContext(AppContext);

    return (
        <div className="home-wrapper">
            <Navigation />
            {navToggle ? <MobileNav /> : ""}
            {isMouseEnter ? <Profile /> : ""}
        </div>
    )
}

export default Navbar;