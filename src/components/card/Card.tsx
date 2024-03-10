import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {productType} from "../../types/Types";
import s from "./Card.module.css"
import {ProductAddToCard} from "../productsList/productAddToCard/ProductAddToCard";


export const Card = memo(() => {

        const productCart = useSelector<AppRootStateType, productType[]>(state =>
            state.product.products)
        const totalCount = productCart.reduce((acc, p) => acc + (p.price * p.count), 0)


        return (
            <div>
                {productCart.map(cart => {
                    return (
                        <div key={cart.id} className={s.card}>
                            <ProductAddToCard key={cart.id} product={cart}/>
                        </div>
                    )
                })}
                <div>
                    {totalCount > 0 ? `Total: ${totalCount}$` : "Your cart is empty"}
                </div>
            </div>
        );
    }
)