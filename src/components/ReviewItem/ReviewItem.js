import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        margin:  '10px',
        marginLeft: '200px',
        padding: '10px',
        borderBottom: '1px solid lightgray'
    }
    
    return (
        <div style={reviewItemStyle} className="review-item">
            <h3 className="product-name">{name}</h3>
            <p>Quantity: {quantity}</p>
    <p><small> Price: $ {price}</small></p>
            <button
            onClick={() => props.RemoveProduct(key)} 
            className="cart-btn">Remove</button>
    
        </div>
    );
};

export default ReviewItem;