import styles from './Header.module.css';
import Advertisement from "./advertisement/Advertisement.jsx";
import Search from "./search/Search.jsx";
import Menu from "./menu/Menu.jsx";
import Orders from "./orders/Orders.jsx";
import Favourites from "./favourites/Favourites.jsx";
import Cart from "./cart/Cart.jsx";
import Logo from "./logo/Logo.jsx";
import Profile from "./profile/Profile.jsx";
import Categories from "./categories/Categories.jsx";
import PropTypes from "prop-types";
import Blackout from "../../../components/blackout/Blackout.jsx";
import {Component} from "react";

class Header extends Component {

    constructor(props) {
        super(props);


        this.visBlackout = <Blackout
            background={`rgba(0, 0, 0, 0.39)`}

            setCancelingBlackoutZIndex={(zIndex) => this.setState({
                cancelingBlackoutZIndex : zIndex
            })}
            callBack={() => this.blackoutCallBack()}
            setRef={(ref) => this.blackout = ref}/>

        this.state = {
            cancelingBlackoutZIndex : undefined,
            isOpenMenu : false
        }

    }

    //Событие при котором отменяеться затемнение, если пользователь нажал на затемнение
    blackoutCallBack() {
        this.setState({
            isOpenMenu : false
        })
    }

    clickMenu() {

        if (!this.state.isOpenMenu) {//Показать затемнение
            this.blackout().on();
        } else { //Отменить затемнение
            this.blackout().off();
        }
        this.setState({
            isOpenMenu : !this.state.isOpenMenu
        })

    }




    render()
    {
        return (
            <>
                { this.visBlackout}

              <div className={styles.header}>
                <div>
                    <Advertisement/>
                </div>
                <div style={{zIndex: this.state.cancelingBlackoutZIndex}} className={styles.navigateContainer}>

                    <div className={styles.navigations}>
                        <Logo className={styles.logo}/>
                        <Menu className={styles.menu} isOpen={this.state.isOpenMenu} clickMenu={() => this.clickMenu()}/>
                        <Search className={styles.search}/>
                        <Orders className={styles.orders}/>
                        <Favourites className={styles.favourites}/>
                        <Cart className={styles.cart}/>
                        <Profile className={styles.profile}/>

                    </div>

                    <div className={styles.categoryContainer} style={{"display": this.state.isOpenMenu ? "block" : "none"}}>
                        <Categories/>
                    </div>

                </div>
            </div>
            </>
        )
    }
    
}


Header.propTypes = {
    cancelingBlackoutClass: PropTypes.string,
    isOpenMenu: PropTypes.bool
};



export default Header
