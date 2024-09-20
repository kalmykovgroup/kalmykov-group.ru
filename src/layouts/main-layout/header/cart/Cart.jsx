import './Cart.css'
import cartIcon from '/src/assets/cart.svg'
import {Link} from "react-router-dom";
function Cart() {

    return (
        <Link  className="cart"  to={`/cart`}>
            <img src={cartIcon} className="cartIcon" alt="cart"/>
            <span>Корзина</span>
        </Link>
    )
}

export default Cart
