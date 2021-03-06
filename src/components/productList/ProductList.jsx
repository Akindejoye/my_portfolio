import Product from '../product/Product';
import './productList.css';
import { products } from '../../data';
import React from "react";

const ProductList = () => {
    return ( 
        <div className='pl' id='product'>
            <div className="pl-texts">
                <h1 className='pl-title'>Create & inspire. It's Francis</h1>
                <p className="pl-desc">
                    Francis is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product 
                        key={item.id} 
                        img={item.img} 
                        link={item.link} 
                    />
                ))}
            </div>
        </div>
     );
}
 
export default ProductList;