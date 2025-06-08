import home from "../assets/images/home.png";
import search from "../assets/images/search.png";
import watchlist from "../assets/images/watchlist.png";
import originals from "../assets/images/originals.png";
import movies from "../assets/images/movies.png";
import series from "../assets/images/series.png";

const linksData = [
    {title: "Home", image: {home}, link: "https: lik-1.com"},
    {title: "SEARCH", image: {search}, link: "https: lik-2.com"},
    {title: "WATCHLIST", image: {watchlist}, link: "https: lik-3.com"},
    {title: "ORIGINALS", image: {originals}, link: "https: lik-4.com"},
    {title: "MOVIES", image: {movies}, link: "https: lik-5.com"},
    {title: "SERIES", image: {series}, link: "https: lik-6.com"}
];

console.log(linksData)

const Links = () => {
    return (
        <div className="link-wrapper">
            <div className="">
                <p>Img</p>
                <a href="">Home</a>
            </div>
        </div>
    )
}

export default Links