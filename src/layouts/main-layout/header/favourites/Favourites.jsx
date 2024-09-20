import './Favourites.css'
import favouritesIcon from '/src/assets/favourites.svg'
import {Link} from "react-router-dom";
function Favourites() {

    return (
        <Link  className="favourites"  to={`/favourites`}>
            <img src={favouritesIcon} className="favouritesIcon" alt="Favourites"/>
            <span>Избранное</span>
        </Link>
    )
}

export default Favourites
