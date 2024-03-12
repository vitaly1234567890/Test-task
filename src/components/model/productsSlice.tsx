import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {productType} from "../../types/Types";

export type InitialState = {
    products: productType[]
}

const initialState: InitialState = {
    products: [],
}

const slice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProductToCard: (state, action: PayloadAction<{ product: productType }>) => {
            return {
                ...state,
                products: [...state.products, action.payload.product],

            }
        },
        removeProductFromCard: (state, action: PayloadAction<{ id: number }>) => {
            return {
                ...state,
                products: [...state.products.filter(f => f.id !== action.payload.id)],

            }
        },
        changeProductCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
            const {id, count} = action.payload;
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === id) {
                        return {...product, count};
                    }
                    return product;
                }),
            };
        },
    }
})

export const {changeProductCount, addProductToCard, removeProductFromCard} = slice.actions
export const productReducer = slice.reducer