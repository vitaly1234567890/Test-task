import React from 'react';
import {SvgIcon, SvgIconProps} from "@mui/material";
import {NavLink} from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import s from "./Header.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {productType} from "../../types/Types";

function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    );
}

export const Header = () => {

    const productCart = useSelector<AppRootStateType, productType[]>(state =>
        state.product.products)
    const totalCount = productCart.reduce((acc, p) => acc + (p.price * p.count), 0)

    return (
        <div className={s.header}>
            <NavLink to={'/'}><HomeIcon color="primary" fontSize="large"/></NavLink>
            <div>
                {totalCount > 0 && <>{totalCount}$</>}
                <NavLink to={'card'}><AddShoppingCartIcon/></NavLink>
            </div>
        </div>
    );
};

