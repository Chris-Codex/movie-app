import logo from "../assets/images/logo.png"
import Links from "./Links"
import Profile from "./Profile"

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

                <div className="profile-wrapper">
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default Navbar