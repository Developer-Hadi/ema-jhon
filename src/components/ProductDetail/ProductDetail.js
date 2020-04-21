import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:2200/product/'+ productKey)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    }, [productKey]);

    return (
        <div>
            {
                product && <Product showAddToCart={false} product={product}></Product>
            }
        </div>
    );
};

export default ProductDetail;