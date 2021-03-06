import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price, 0);
    
    let total =0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
        
    }
    let shiping = 0;
    if(total> 35){
        shiping =0;
    }
    else if(total>15){
        shiping = 4.99;
    }
    else if(total>0){
        shiping = 12.99
    }

    const tax = total/10;
    const grandTotal = total + shiping + tax;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shiping}</small></p>
            <p><small>VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: $ {formatNumber(grandTotal)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;