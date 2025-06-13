import logo from "../assets/images/logo.png"
import mickey from "../assets/images/mickey_logo.jpeg"
import close from "../assets/images/close.png"
import Links from "./Links"
import hamburger from "../assets/images/hamburger.png"
import { useContext } from "react"
import AppContext from "../context/AppContext"



const Navbar = () => {
    const { navToggle, handleNavToggle, 
        isMouseEnter, setIsMouseEnter } = useContext(AppContext);

    return (
        <header>
            <div className="logo-wrappeer">
                <img src={logo} alt="logo" />
            </div>

            <div className="navs-wrapper">
                <nav>
                    <Links />
                </nav>

                <div className="settings-wrapper"
                    onMouseEnter={() => setIsMouseEnter(true)}
                    onMouseLeave={() => setIsMouseEnter(false)}
                >
                    <div className="inner-settings-container">
                        <div className="profile-logo">
                            <p>Mickey</p>
                            <img src={mickey} alt="profile-logo" />
                        </div>
                    </div>
                </div>

                <div className="toggle-btn" onClick={() => handleNavToggle()}>
                    {navToggle ? 
                        <img src={close} alt="logo" /> : <img src={hamburger} alt="logo" /> 
                    }  
                </div>
            </div>
        </header>
    )
}

export default Navbar