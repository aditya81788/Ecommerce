import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import stardull_icon from '../Assets/stardull_icon.png';
import { ShopContext } from '../../Contexts/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
const {addToCart} = useContext(ShopContext);


    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={stardull_icon} alt="" />
                    <p>(122)</p>
                   
                </div>
                <div className="productdisplay-right-prices">
                        <div className='productdisplay-right-price-old'>${product.old_price}</div>
                        <div className='productdisplay-right-price-new'>${product.new_price}</div>
                    </div>
                    <div className="productdisplay-right-description">
                    Our trendiest hoodies with such soothing colors will be perfect for winters! The design is evergreen and will never go out of fashion! Look comfortable and chic at the same time. The hoodie fits regularly, neither too fit nor too loose. What's more? With all these qualities mentioned, our t-shirts come at extremely affordable prices!


                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size :</h1> 
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                    <p className='productdisplay-right-category'><span>Category: </span> Women, T-shirt, Crop Top</p>
                    <p className='productdisplay-right-category'><span>Tags: </span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay