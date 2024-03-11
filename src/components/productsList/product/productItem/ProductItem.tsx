import React from 'react';
import {useParams} from "react-router-dom";
import s from "./ProductItem.module.css"
import {products} from "../../../../app/App";
import {IconButton} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../../../app/store";
import {productType} from "../../../../types/Types";
import {addProductToCard, changeProductCount} from "../../../model/productsSlice";

export const ProductItem = () => {

    const dispatch = useDispatch<AppDispatch>()
    const cart = useSelector<AppRootStateType, productType[]>(state => state.product.products)


    const params = useParams()

    let findId = params.id ? products.find(el => el.id === Number(params.id)) : undefined;

    if (!findId) {
        return <div>Product not found</div>;
    }


    const isAdded = cart.some(c => c.id === Number(params.id))
    const buyGoodsHandler = () => {
        if (findId) {
            dispatch(addProductToCard({ product: findId }));
            dispatch(changeProductCount({ count: findId.count + 1, id: findId.id }));
        } else {
            // Обработка случая, когда findId равен undefined
            throw new Error("Product not found");
        }
    };

    return (
        <div className={s.root}>
            <h2>{findId.name}</h2>
            <p>Price: {findId.price}</p>
            <p>Description: {findId.description}</p>
            <img src={findId.image} alt={findId.name}/>
            <div className={s.button}>
                <IconButton disabled={isAdded} size={"small"} color="primary" aria-label="add to shopping cart"
                            onClick={buyGoodsHandler}>
                    <AddShoppingCartIcon/>
                    {!isAdded ? 'Add to card' : 'Product added to card'}
                </IconButton>
            </div>
        </div>
    );
};
