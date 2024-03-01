import React from 'react';
import './App.css';
import {ProductsList} from "./components/productsList/ProductsList";
import {Header} from "./components/header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import Card from "./components/card/Card";
import {productType} from "./types/Types";

const products: productType[] = [
    {id: 1, name: 'Bananas', price: 20, description: 'fruit, you can eat this', image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614572666_2-p-banan-na-belom-fone-2.jpg'},
    {id: 2, name: 'Book', price: 80, description: 'Book, you can read this', image: 'https://e7.pngegg.com/pngimages/720/157/png-clipart-book-7-reading-desktop-wallpaper.png'},
    {id: 3, name: 'Socks', price: 30, description: 'clothing, you can wear this', image: 'https://media.baamboozle.com/uploads/images/457589/1639991503_48558_url.jpeg'},
    {id: 4, name: 'Bed', price: 300, description: 'you can sleep on this', image: 'https://www.e8ps.co.uk/wp-content/uploads/2018/10/bed_PNG17389.jpg'},
    {id: 5, name: 'Phone', price: 180, description: 'you can call it', image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614587323_40-p-kartinka-telefon-na-belom-fone-42.png'},
]

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Navigate to={'productList'} />} />
                <Route path={'productList'} element={ <ProductsList product={products}/>}/>
                <Route path={'card'} element={<Card/>}/>
                <Route path={'*'} element={<div>Error 404. Not found</div>}/>
            </Routes>
        </div>
    );
}

export default App;
