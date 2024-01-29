import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../Contexts/ShopContext'
import remove_icon from '../Assets/remove.png';

const CartItems = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext)
    return (
        <div className="cartitems">
            <div className="cartitems-format-main" >
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) 
                {
                    return <div>
                        <div className='cartitems-format'>
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price} </p>
                            <button className='cartitems-quantity'> {cartItems[e.id]} </button>
                            <p>$ {e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} alt="" onClick={() => {removeFromCart(e.id)}} />
                        </div> 
                        <hr />
                    </div>
                }
            })}

        </div>
    )
}
export default CartItems;