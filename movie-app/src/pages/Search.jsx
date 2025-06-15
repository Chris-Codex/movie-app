import { useContext } from "react";
import MobileNav from "../components/MobileNav";
import AppContext from "../context/AppContext";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Search = () => {

    return (
        <div className="search-wrapper">
            <Navbar />
            <div className="search-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title, character, or genre"
                />
            </div>

            <h2>Explore</h2>
            <Footer />
        </div>
    )
}

export default Search;