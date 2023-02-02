import React, {useEffect, useState} from 'react';
import './ProductList.scss'
import {Link} from "react-router-dom";
import ListItem from "../../components/ListItem.jsx";


function ProductList(props) {
     const [listItems, setListItems] = useState([]) ;

    useEffect(()=>{
        window.localStorage.getItem('list') && setListItems (JSON.parse(window.localStorage.getItem('list')));
        console.log('zmieniam')
    },[]);

    // const addToLocalStorage = () => window.localStorage.setItem('list', JSON.stringify([
    //     {
    //         type: 'furniture',
    //         name: 'chair',
    //         SKU: 'f3612241ad',
    //         price: '25$',
    //         dimension: '24x45x15'
    //     },
    //     {
    //         type: 'DVD',
    //         name: 'The Wire',
    //         SKU: 'z3618541sf',
    //         price: '25$',
    //         size: '700MB'
    //     },
    //     {
    //         type: 'book',
    //         name: 'The Lord of the Rings',
    //         SKU: 'z3618541sf',
    //         price: '25$',
    //         weight: '2KG'
    //     }
    // ]));
    return (
        <>
            <div>
                <h1>Product List</h1>
                <div>
                    <Link to="/add-product">ADD</Link>
                    <button id="delete-product-btn">MASS DELETE</button>
                </div>
                <div>
                    { listItems?.map((item, idx)=>
                        <ListItem key={idx} item={item.name}/>
                    )}
                </div>
            </div>

        </>

    );
}

export default ProductList;