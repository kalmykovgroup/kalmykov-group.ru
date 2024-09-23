import styles from './Favourites.module.css';
import common from './../Common.module.css';
import favouritesIcon from '/src/assets/favourites.svg'
import {Link} from "react-router-dom";
function Favourites() {

    return (
        <Link  className={`${styles.favourites} ${common.header_right_item}`}  to={`/favourites`}>
            <img src={favouritesIcon} className={styles.favouritesIcon} alt="Favourites"/>
            <span>Избранное</span>
        </Link>
    )
}

export default Favourites
