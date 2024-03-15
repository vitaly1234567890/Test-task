import {combineReducers, createStore} from "@reduxjs/toolkit";
import {productReducer} from "../components/model/productsSlice";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    product: productReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        product: store.getState().product,
    });
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;