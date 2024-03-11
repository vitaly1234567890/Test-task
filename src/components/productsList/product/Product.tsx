import React from 'react';
import {productType} from "../../../types/Types";
import s from "./product.module.css"
import {IconButton} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {AppDispatch, AppRootStateType} from "../../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {addProductToCard, changeProductCount} from "../../model/productsSlice";
import {Link} from "react-router-dom";

type Props = {
    product: productType
}


export const Product = ({product}: Props) => {
    const dispatch = useDispatch<AppDispatch>()
    const cart = useSelector<AppRootStateType, productType[]>(state => state.product.products)

    const buyGoodsHandler = () => {
        dispatch(addProductToCard({product}))
        dispatch(changeProductCount({count: product.count + 1, id: product.id}))
    }

    const isAdded = cart.some(c => c.id === product.id)

    return (
        <div className={s.product}>
            <Link to={`${product.id}`} className={s.noUnderline}>
                <img src={product.image} alt={product.name}/>
                <h2>{product.name}</h2>
                Description:<p>{product.description}</p>
                Price: {product.price}$
            </Link>
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

