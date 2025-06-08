import logo from "../assets/images/logo.png"
import mickey from "../assets/images/mickey_logo.jpeg"
import Links from "./Links"
import Profile from "./Profile"
import hamburger from "../assets/images/hamburger.png"
import { useContext } from "react"
import AppContext from "../context/AppContext"



const Navbar = () => {
    const { navToggle, handleNavToggle } = useContext(AppContext);

    return (
        <header>
            <div className="logo-wrappeer">
                <img src={logo} alt="logo" />
            </div>

            <div className="navs-wrapper">
                <nav>
                    <Links />
                </nav>

                <div className="settings-wrapper">
                    <div className="inner-settings-container">
                        <div className="profile-logo">
                            <p>Mickey</p>
                            <img src={mickey} alt="profile-logo" />
                        </div>
                    </div>
                </div>

                <div className="toggle-btn" onClick={() => handleNavToggle()}>
                    <img src={hamburger} alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Navbar