import home from "../assets/images/home.png";
import search from "../assets/images/search.png";
import watchlist from "../assets/images/watchlist.png";
import originals from "../assets/images/originals.png";
import movies from "../assets/images/movies.png";
import series from "../assets/images/series.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const linksData = [
    { title: "Home", image: home, link: "/home" },
    { title: "SEARCH", image: search, link: "/search" },
    { title: "WATCHLIST", image: watchlist, link: "/watchlist" },
    { title: "ORIGINALS", image: originals, link: "/originals" },
    { title: "MOVIES", image: movies, link: "/movies" },
    { title: "SERIES", image: series, link: "/series" }
];


const MobileNav = () => {
    const [links, setLinks] = useState(linksData);

    return (
        <div className="mobileNav-wrapper">
            {links.map((link) => {
                return (
                    <div className="mobileNav-container">
                        <img src={link.image} alt="link-img" />
                        <Link to={link.link} className="links">{link.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default MobileNav