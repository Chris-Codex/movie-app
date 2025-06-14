import { useContext } from "react"
import mickey from "../assets/images/mickey_logo.jpeg"
import AppContext from "../context/AppContext"

const Profile = () => {
    const {setIsMouseEnter } = useContext(AppContext)

    return (
        <div className="profile-container" onMouseLeave={() => setIsMouseEnter(false)}>
           <div className="setting-profile-wrapper">
                <img src={mickey} alt="profile-icon" />
                <p>Christian</p>
           </div>
           <div className="divider"></div>
           <div className="settings-actions-wrapper">
                <p>Edit Profile</p>
                <p>App Settings</p>
                <p>Account</p>
                <p>Help</p>
                <p>Logout</p>
           </div>
        </div>
    )
}

export default Profile