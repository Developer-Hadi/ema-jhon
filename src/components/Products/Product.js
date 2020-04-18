import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="Product Photos"/>
            </div>
            <div className="product-details">
                <h4><Link to={"/product/"+ key}>{name}</Link></h4>
                <p><small>By : {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                {props.showAddToCart===true && <button className="cart-btn" onClick={() => props.handleAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;