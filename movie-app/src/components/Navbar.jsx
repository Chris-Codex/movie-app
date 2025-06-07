import logo from "../assets/images/logo.png"
import Links from "./Links"

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="links-container">
                <div className="links-wrapper">
                    <Links />
                </div>
                <div className="profile">
                    Profile
                </div>
            </div>
        </div>
    )
}

export default Navbar