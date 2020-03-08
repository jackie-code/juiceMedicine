import React from 'react';

function ProductItem (props) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            <p>{props.product.price}</p>
        </div>
    );
}

export default ProductItem;