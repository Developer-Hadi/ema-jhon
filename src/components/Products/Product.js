import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="Product Image"/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p><small>By : {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className="cart-btn" onClick={() => props.handleAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;