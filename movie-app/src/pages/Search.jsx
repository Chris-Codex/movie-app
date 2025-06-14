import { useContext } from "react";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navigation";
import AppContext from "../context/AppContext";
import Profile from "../components/Profile";

const Search = () => {
    const { navToggle, isMouseEnter, setIsMouseEnter } = useContext(AppContext);

    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Search;