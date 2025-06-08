import mickey_logo from "../assets/images/mickey_logo.jpeg"

const Profile = () => {

    return (
        <div className="profile-container">
            <div className="logo-user-wrappeer">
                <div className="username">Chhristia</div>
                <img src={mickey_logo} alt="user-logo" />
            </div>
        </div>
    )
}

export default Profile