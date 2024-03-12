import React from 'react';
import {productType} from "../../types/Types";
import {Product} from "./product/Product";
import s from "./ProductList.module.css"

type Props = {
    product: productType[]
}

export const ProductsList = ({product}: Props) => {
    return (
        <div className={s.productList}>
            {product.map(product => {
                return <Product key={product.id} product={product}/>
            })}
        </div>
    );
};

