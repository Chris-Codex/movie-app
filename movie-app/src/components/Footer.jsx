import logo from "../assets/images/logo.png"
const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="logo" />
            <ul>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
                <li>EMEA Privacy Rights</li>
                <li>Subscriber Aggrement</li>
                <li>Help</li>
                <li>Supported Devices</li>
                <li>About Us</li>
            </ul>
        </div>
    )
}

export default Footer;