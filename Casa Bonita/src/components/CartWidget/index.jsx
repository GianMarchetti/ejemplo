import { useContext } from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import {Count} from '../../Things.module.css'
import {CartIcon} from './CartWidget.module.css'

const CartWidget = () => {
    const {showQuantity} = useContext(CartContext);
    return (
        <div className={CartIcon}>
            <Link to={`/cart`}>
                <i className="fas fa-cart-plus fa-2x" style={{color:'green'}}></i>
                <span className={Count}>{showQuantity}</span>
            </Link>
            
        </div>
    );
}

export default CartWidget