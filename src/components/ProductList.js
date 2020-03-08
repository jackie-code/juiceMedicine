import React from 'react';
import '../appStyles/ProductList.css';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [
                {
                  name: "Olay",
                  description: "gjs fsjifsofj sd",
                  price: "$1000"  
                },
                {
                    name: "Mac",
                    description: "expensive",
                    price: "$2000"  
                  },
            ]
        }
    }
    render() {
        return(
            <div className="productList">
                <h1>This is the product list</h1>
                {
                    this.state.products.map(p => {
                    return <ProductItem product = {p}/>
                    })
                }
            </div>
        );
    }
}

export default ProductList;