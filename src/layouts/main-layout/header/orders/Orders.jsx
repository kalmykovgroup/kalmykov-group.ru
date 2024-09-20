import './Orders.css'
import ordersIcon from '/src/assets/orders.svg'


import { Outlet, Link } from "react-router-dom";

function Orders() {

    return (
        <Link  className="orders"  to={`/orders`}>
            <img src={ordersIcon} className="ordersIcon" alt="orders"/>
            <span>Заказы</span>
        </Link>
)
}

export default Orders
