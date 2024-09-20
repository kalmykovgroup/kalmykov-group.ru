import './Header.css'
import Advertisement from "./advertisement/Advertisement.jsx";
import Search from "./search/Search.jsx";
import Menu from "./menu/Menu.jsx";
import Orders from "./orders/Orders.jsx";
import Favourites from "./favourites/Favourites.jsx";
import Cart from "./cart/Cart.jsx";
import Logo from "./logo/Logo.jsx";
import Profile from "./profile/Profile.jsx";

const Header = () => {

    return (
        <div className="header">
            <div className="advertisementBlock">
                <Advertisement/>
            </div>
            <div className="navigateBlock">
                <Logo className="logo"/>
                <Menu className="menu"/>
                <Search  className="search"/>
                <Orders className="orders"/>
                <Favourites className="favourites"/>
                <Cart className="cart"/>
                <Profile className="profile"/>
            </div>
        </div>
    )
}

export default Header
