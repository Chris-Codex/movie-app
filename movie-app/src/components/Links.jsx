import home from "../assets/images/home.png";
import search from "../assets/images/search.png";
import watchlist from "../assets/images/watchlist.png";
import originals from "../assets/images/originals.png";
import movies from "../assets/images/movies.png";
import series from "../assets/images/series.png";
import { useState } from "react";
import { Link } from "react-router-dom"

const linksData = [
    {id: 1, title: "Home", image: home, link: "/" },
    {id: 2, title: "SEARCH", image: search, link: "/search" },
    {id: 3, title: "WATCHLIST", image: watchlist, link: "/watchlist" },
    {id: 4, title: "ORIGINALS", image: originals, link: "/originals" },
    {id: 5, title: "MOVIES", image: movies, link: "/movies" },
    {id: 6, title: "SERIES", image: series, link: "/series" }
];


const Links = () => {
    const [links, setLinks] = useState(linksData)
    
    return (
        <div className="navLinks-wrappeer">
            {links.map((link) => {
                return (
                    <div className="individual-link-wrapper" key={link.id}>
                        <img src={link.image} alt="link-image" />
                        <Link to={link.link} className="links">{link.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Links