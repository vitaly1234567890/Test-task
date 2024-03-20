import React from 'react';
import {productType} from "../../../types/Types";
import s from "./ProductAddToCard.module.css"
import {AppDispatch} from "../../../app/store";
import {useDispatch} from "react-redux";
import {CustomButton} from "../../button/CustomButton";
import {changeProductCount, removeProductFromCard} from "../../model/productsSlice";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    product: productType
}

export const ProductAddToCard = ({product}: Props) => {
    const dispatch = useDispatch<AppDispatch>()

    const DecButtonHandler = () => {
        dispatch(changeProductCount({count: product.count - 1, id: product.id}))
        if (product.count === 1) {
            dispatch(removeProductFromCard({id: product.id}))
        }
    }

    const IncButtonHandler = () => {
        dispatch(changeProductCount({count: product.count + 1, id: product.id}))
    }


    const RemoveFromCardHandler = () => {
        dispatch(removeProductFromCard({id: product.id}))
    }

    return (
        <div className={s.main}>
            <div className={s.product}>
                <img src={product.image} alt=""/>
                <div>
                    <h2>{product.name}</h2>
                    Description:<p>{product.description}</p>
                    Price: {product.price}$
                </div>
                <div className={s.button}>
                    <CustomButton title={"-"} onClick={DecButtonHandler}/>
                    <div>{product.count}</div>
                    <CustomButton title={"+"} onClick={IncButtonHandler}/>
                </div>
            </div>
            <IconButton aria-label="delete" onClick={RemoveFromCardHandler}>
                <DeleteIcon/>
            </IconButton>
        </div>
    );
};